import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import Attendance from "../models/Attendance.js";
import Marks from "../models/Marks.js";
import Notice from "../models/Notice.js";

// Get dashboard statistics
export const getDashboardStats = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Basic counts
        const totalStudents = await Student.countDocuments({ status: 'active' });
        const totalTeachers = await Teacher.countDocuments({ status: 'active' });
        const totalNotices = await Notice.countDocuments({ isActive: true });

        // Today's attendance
        const todayAttendance = await Attendance.aggregate([
            { $match: { date: today } },
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 }
                }
            }
        ]);

        const attendanceStats = {
            present: 0,
            absent: 0,
            late: 0,
            total: 0
        };

        todayAttendance.forEach(item => {
            attendanceStats[item._id] = item.count;
            attendanceStats.total += item.count;
        });

        // Class-wise student distribution
        const classDistribution = await Student.aggregate([
            { $match: { status: 'active' } },
            {
                $group: {
                    _id: "$class",
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        // Recent exam results (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const recentExamStats = await Marks.aggregate([
            { $match: { examDate: { $gte: thirtyDaysAgo } } },
            {
                $group: {
                    _id: "$subject",
                    averagePercentage: { $avg: { $multiply: [{ $divide: ["$obtainedMarks", "$maxMarks"] }, 100] } },
                    totalExams: { $sum: 1 }
                }
            },
            { $sort: { averagePercentage: -1 } }
        ]);

        // Monthly attendance trend
        const monthlyAttendance = await Attendance.aggregate([
            {
                $match: {
                    date: {
                        $gte: new Date(today.getFullYear(), today.getMonth(), 1),
                        $lte: today
                    }
                }
            },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                    present: { $sum: { $cond: [{ $eq: ["$status", "present"] }, 1, 0] } },
                    absent: { $sum: { $cond: [{ $eq: ["$status", "absent"] }, 1, 0] } },
                    total: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        res.json({
            totalStudents,
            totalTeachers,
            totalNotices,
            attendanceStats,
            classDistribution,
            recentExamStats,
            monthlyAttendance
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get admin dashboard data
export const getAdminDashboard = async (req, res) => {
    try {
        const stats = await getDashboardStats(req, res);
        
        // Additional admin-specific data
        const teacherStats = await Teacher.aggregate([
            { $match: { status: 'active' } },
            {
                $group: {
                    _id: "$subject",
                    count: { $sum: 1 },
                    avgExperience: { $avg: "$experience" }
                }
            }
        ]);

        // Low attendance students (less than 75%)
        const lowAttendanceStudents = await Attendance.aggregate([
            {
                $group: {
                    _id: "$studentId",
                    totalDays: { $sum: 1 },
                    presentDays: { $sum: { $cond: [{ $eq: ["$status", "present"] }, 1, 0] } }
                }
            },
            {
                $project: {
                    attendancePercentage: { $multiply: [{ $divide: ["$presentDays", "$totalDays"] }, 100] }
                }
            },
            { $match: { attendancePercentage: { $lt: 75 } } },
            { $lookup: { from: "students", localField: "_id", foreignField: "_id", as: "student" } },
            { $unwind: "$student" },
            { $project: { "student.name": 1, "student.class": 1, attendancePercentage: 1 } }
        ]);

        return { ...stats, teacherStats, lowAttendanceStudents };
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get teacher dashboard data
export const getTeacherDashboard = async (req, res) => {
    try {
        const { teacherEmail } = req.params;
        
        // Get teacher's classes
        const teacher = await Teacher.findOne({ email: teacherEmail });
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        // Students in teacher's classes
        const myStudents = await Student.find({ 
            class: { $in: teacher.classes },
            status: 'active'
        });

        // Recent attendance for teacher's classes
        const today = new Date();
        const recentAttendance = await Attendance.find({
            class: { $in: teacher.classes },
            date: { $gte: new Date(today.setDate(today.getDate() - 7)) }
        }).populate('studentId', 'name rollNumber');

        // Recent marks entered by teacher
        const recentMarks = await Marks.find({
            teacherId: teacherEmail
        }).populate('studentId', 'name rollNumber').sort({ createdAt: -1 }).limit(10);

        res.json({
            myStudents: myStudents.length,
            myClasses: teacher.classes,
            recentAttendance,
            recentMarks
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};