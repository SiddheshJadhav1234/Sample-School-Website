import mongoose from "mongoose";

const parentSchema = new mongoose.Schema(
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

    // Reference to User account (parent's login)
    // Each parent has a corresponding User with role: "parent"
    userAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Link to child student
    // A parent can have multiple children
    linkedStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],

    // Contact information
    phone: {
      type: String,
      default: null,
    },

    // Relationship to student
    // Example: "Father", "Mother", "Guardian"
    relationship: {
      type: String,
      default: null,
    },

    // Address (can be same as student or different)
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },

    // Occupation (optional)
    occupation: {
      type: String,
      default: null,
    },

    // Account status
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Index for faster queries
parentSchema.index({ linkedStudents: 1 });

const Parent = mongoose.model("Parent", parentSchema);

export default Parent;
