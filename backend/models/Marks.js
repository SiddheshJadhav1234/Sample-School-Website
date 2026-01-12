import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    subject: { type: String, required: true },
    examType: { type: String, enum: ['unit-test', 'mid-term', 'final', 'assignment'], required: true },
    maxMarks: { type: Number, required: true },
    obtainedMarks: { type: Number, required: true },
    class: { type: String, required: true },
    section: { type: String, required: true },
    examDate: { type: Date, required: true },
    teacherId: { type: String, required: true }, // teacher email
    remarks: { type: String }
}, { timestamps: true });

export default mongoose.model("Marks", marksSchema);