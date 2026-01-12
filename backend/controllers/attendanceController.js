import Attendance from "../models/Attendance.js";
import Student from "../models/Student.js";

// Mark attendance
export const markAttendance = async (req, res) => {
    try {
        const { studentId, date, status, class: className, section, markedBy, remarks } = req.body;
        
        // Check if attendance already marked for this date
        const existingAttendance = await Attendance.findOne({ studentId, date });
        if (existingAttendance) {
            return res.status(400).json({ message: "Attendance already marked for this date" });
        }

        const attendance = new Attendance({
            studentId,
            date,
            status,
            class: className,
            section,
            markedBy,
            remarks
        });

        await attendance.save();
        res.status(201).json({ message: "Attendance marked successfully", attendance });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get attendance by class and date
export const getAttendanceByClassAndDate = async (req, res) => {
    try {
        const { className, section, date } = req.params;
        
        const attendance = await Attendance.find({
            class: className,
            section,
            date: new Date(date)
        }).populate('studentId', 'name rollNumber');

        res.json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get student attendance history
export const getStudentAttendance = async (req, res) => {
    try {
        const { studentId } = req.params;
        const { startDate, endDate } = req.query;

        let query = { studentId };
        if (startDate && endDate) {
            query.date = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };
        }

        const attendance = await Attendance.find(query).sort({ date: -1 });
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get attendance statistics
export const getAttendanceStats = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const todayAttendance = await Attendance.aggregate([
            { $match: { date: today } },
            { $group: { _id: "$status", count: { $sum: 1 } } }
        ]);

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
                    late: { $sum: { $cond: [{ $eq: ["$status", "late"] }, 1, 0] } }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        res.json({
            todayAttendance,
            monthlyAttendance
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};