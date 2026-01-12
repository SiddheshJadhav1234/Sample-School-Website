import Teacher from "../models/Teacher.js";

// Get all teachers
export const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({ status: 'active' }).sort({ createdAt: -1 });
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get teacher by ID
export const getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        res.json(teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new teacher
export const addTeacher = async (req, res) => {
    try {
        const teacher = new Teacher(req.body);
        await teacher.save();
        res.status(201).json({ message: "Teacher added successfully", teacher });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update teacher
export const updateTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        res.json({ message: "Teacher updated successfully", teacher });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete teacher
export const deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndUpdate(req.params.id, { status: 'inactive' }, { new: true });
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        res.json({ message: "Teacher deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get teacher statistics
export const getTeacherStats = async (req, res) => {
    try {
        const totalTeachers = await Teacher.countDocuments({ status: 'active' });
        const subjectWiseCount = await Teacher.aggregate([
            { $match: { status: 'active' } },
            { $group: { _id: "$subject", count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ]);
        
        res.json({
            totalTeachers,
            subjectWiseCount
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};