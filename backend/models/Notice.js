import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    targetAudience: { type: String, enum: ['all', 'students', 'teachers', 'parents'], default: 'all' },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    publishedBy: { type: String, required: true }, // admin email
    publishDate: { type: Date, default: Date.now },
    expiryDate: { type: Date },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Notice", noticeSchema);