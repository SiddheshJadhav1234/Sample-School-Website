import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Basic user information
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },

    // User role: admin, teacher, student, or parent
    role: {
      type: String,
      required: true,
      enum: ["student", "teacher", "admin", "parent"],
      default: "student",
    },

    // IMPORTANT: For parent role only
    // Links a parent to their child (student)
    // A parent can only have ONE linked student
    linkedStudent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: null,
      // This field is only populated if role === "parent"
    },

    // Flag to track if user has been activated (for future use)
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;