import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    employeeId: { type: String, required: true, unique: true },
    subject: { type: String, required: true },
    classes: [{ type: String }], // Array of classes they teach
    phone: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: Number, required: true }, // in years
    joiningDate: { type: Date, default: Date.now },
    salary: { type: Number, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
}, { timestamps: true });

export default mongoose.model("Teacher", teacherSchema);