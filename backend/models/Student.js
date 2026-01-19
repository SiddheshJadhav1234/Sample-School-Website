import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    // Personal Information
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Unique roll number in the school
    rollNumber: {
      type: String,
      required: true,
      unique: true,
    },

    // Academic Information
    class: {
      type: String,
      required: true,
      // Example: "Class 5A", "Class 6B"
    },

    section: {
      type: String,
      required: true,
      // Example: "A", "B", "C"
    },

    // Reference to User account (the student's own account)
    // Each student has a corresponding User with role: "student"
    userAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Reference to Parent account
    // The parent can access this student's data
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      // This references a User with role: "parent"
    },

    // Reference to Teacher (class teacher)
    // Multiple teachers can teach a student, but one is class teacher
    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      default: null,
    },

    // Contact information
    dateOfBirth: {
      type: Date,
      default: null,
    },

    phone: {
      type: String,
      default: null,
    },

    // Address
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },

    // Enrollment status
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Index for faster queries
studentSchema.index({ class: 1, section: 1 });
studentSchema.index({ parent: 1 });

const Student = mongoose.model("Student", studentSchema);

export default Student;
