import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    // Personal Information
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Email (unique, same as in User model)
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // Subject specialization
    subject: {
      type: String,
      required: true,
      // Example: "Mathematics", "Science", "English"
    },

    // Classes assigned to this teacher
    // Example: [{ class: "5A", section: "A" }, { class: "5B", section: "B" }]
    classesAssigned: [
      {
        class: String,
        section: String,
        _id: false,
      },
    ],

    // Reference to User account (teacher's login)
    userAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Contact information
    phone: {
      type: String,
      default: null,
    },

    qualification: {
      type: String,
      default: null,
      // Example: "B.Ed", "M.Sc"
    },

    experience: {
      type: Number,
      default: 0,
      // Years of experience
    },

    // Employment status
    joinDate: {
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
teacherSchema.index({ subject: 1 });

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
