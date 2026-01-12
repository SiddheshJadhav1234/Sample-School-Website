import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['present', 'absent', 'late'], required: true },
    class: { type: String, required: true },
    section: { type: String, required: true },
    markedBy: { type: String, required: true }, // teacher email
    remarks: { type: String }
}, { timestamps: true });

// Compound index to prevent duplicate attendance records
attendanceSchema.index({ studentId: 1, date: 1 }, { unique: true });

export default mongoose.model("Attendance", attendanceSchema);