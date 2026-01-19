import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "./models/user.js";

dotenv.config();

/**
 * Seed script to create admin user
 * Run: node backend/seedAdmin.js
 */

const createAdminUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Connected to MongoDB");

    // Check if admin already exists
    const adminExists = await User.findOne({ email: "admin@school.com" });
    if (adminExists) {
      console.log("⚠️  Admin user already exists!");
      console.log("Email: admin@school.com");
      console.log("Password: Admin@123");
      await mongoose.disconnect();
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    // Create admin user
    const admin = await User.create({
      name: "Admin User",
      email: "admin@school.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin user created successfully!");
    console.log("\n📋 Admin Credentials:");
    console.log("━━━━━━━━━━━━━━━━━━━━");
    console.log("Email:    admin@school.com");
    console.log("Password: Admin@123");
    console.log("Role:     admin");
    console.log("━━━━━━━━━━━━━━━━━━━━\n");
    console.log("🔐 Login URL: http://localhost:5173 (or your frontend URL)");

    await mongoose.disconnect();
    console.log("✅ Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Error creating admin user:", error.message);
    process.exit(1);
  }
};

createAdminUser();
