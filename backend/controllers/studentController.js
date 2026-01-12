import Student from "../models/Student.js";

// Get all students
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({ status: 'active' }).sort({ createdAt: -1 });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get student by ID
export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new student
export const addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({ message: "Student added successfully", student });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update student
export const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({ message: "Student updated successfully", student });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete student
export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, { status: 'inactive' }, { new: true });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get students by class
export const getStudentsByClass = async (req, res) => {
    try {
        const { className, section } = req.params;
        const students = await Student.find({ 
            class: className, 
            section: section, 
            status: 'active' 
        }).sort({ rollNumber: 1 });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get student statistics
export const getStudentStats = async (req, res) => {
    try {
        const totalStudents = await Student.countDocuments({ status: 'active' });
        const classwiseCount = await Student.aggregate([
            { $match: { status: 'active' } },
            { $group: { _id: "$class", count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ]);
        
        res.json({
            totalStudents,
            classwiseCount
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};