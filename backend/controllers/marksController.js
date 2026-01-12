import Marks from "../models/Marks.js";
import Student from "../models/Student.js";
import mongoose from "mongoose";

// Add marks
export const addMarks = async (req, res) => {
    try {
        const marks = new Marks(req.body);
        await marks.save();
        res.status(201).json({ message: "Marks added successfully", marks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get marks by student ID
export const getMarksByStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        const marks = await Marks.find({ studentId }).sort({ examDate: -1 });
        res.json(marks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get marks by class and exam
export const getMarksByClassAndExam = async (req, res) => {
    try {
        const { className, section, examType } = req.params;
        
        const marks = await Marks.find({
            class: className,
            section,
            examType
        }).populate('studentId', 'name rollNumber').sort({ obtainedMarks: -1 });

        res.json(marks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update marks
export const updateMarks = async (req, res) => {
    try {
        const marks = await Marks.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!marks) {
            return res.status(404).json({ message: "Marks record not found" });
        }
        res.json({ message: "Marks updated successfully", marks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get student performance analytics
export const getStudentPerformance = async (req, res) => {
    try {
        const { studentId } = req.params;
        
        const performance = await Marks.aggregate([
            { $match: { studentId: mongoose.Types.ObjectId(studentId) } },
            {
                $group: {
                    _id: "$subject",
                    averageMarks: { $avg: { $divide: ["$obtainedMarks", "$maxMarks"] } },
                    totalExams: { $sum: 1 },
                    bestScore: { $max: { $divide: ["$obtainedMarks", "$maxMarks"] } },
                    worstScore: { $min: { $divide: ["$obtainedMarks", "$maxMarks"] } }
                }
            }
        ]);

        res.json(performance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get class performance analytics
export const getClassPerformance = async (req, res) => {
    try {
        const { className, section } = req.params;
        
        const performance = await Marks.aggregate([
            { $match: { class: className, section } },
            {
                $group: {
                    _id: "$subject",
                    averagePercentage: { $avg: { $multiply: [{ $divide: ["$obtainedMarks", "$maxMarks"] }, 100] } },
                    totalStudents: { $addToSet: "$studentId" },
                    highestScore: { $max: { $multiply: [{ $divide: ["$obtainedMarks", "$maxMarks"] }, 100] } },
                    lowestScore: { $min: { $multiply: [{ $divide: ["$obtainedMarks", "$maxMarks"] }, 100] } }
                }
            },
            {
                $project: {
                    subject: "$_id",
                    averagePercentage: { $round: ["$averagePercentage", 2] },
                    totalStudents: { $size: "$totalStudents" },
                    highestScore: { $round: ["$highestScore", 2] },
                    lowestScore: { $round: ["$lowestScore", 2] }
                }
            }
        ]);

        res.json(performance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};