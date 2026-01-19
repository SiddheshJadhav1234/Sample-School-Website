import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import parentRoutes from "./routes/parentRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

/**
 * MIDDLEWARE
 */

// CORS middleware - Allow requests from frontend
app.use(cors());

// JSON parser middleware - Parse incoming JSON requests
app.use(express.json());

// URL encoded parser middleware - Parse form data
app.use(express.urlencoded({ extended: true }));

/**
 * ROUTES
 */

// Authentication routes (public routes)
// POST /api/auth/signup - Register new user
// POST /api/auth/login - Login user
app.use("/api/auth", authRoutes);

// Admin routes (protected - admin only)
// POST /api/admin/create-student - Create new student
// POST /api/admin/create-teacher - Create new teacher
// GET /api/admin/students - Get all students
// GET /api/admin/teachers - Get all teachers
app.use("/api/admin", adminRoutes);

// Student routes (protected - student/admin)
// GET /api/student/me - Get student's own profile
// GET /api/student/:studentId - Get student by ID
// GET /api/student/class - Get all students in a class
app.use("/api/student", studentRoutes);

// Parent routes (protected - parent/admin)
// GET /api/parent/my-child - Get parent's linked child
// GET /api/parent/me - Get parent's own profile
// POST /api/parent/link - Link parent to child (admin)
app.use("/api/parent", parentRoutes);

// Teacher routes (protected - teacher/admin)
// GET /api/teacher/me - Get teacher's own profile
// GET /api/teacher/students - Get teacher's assigned students
// GET /api/teacher/:teacherId - Get teacher by ID
app.use("/api/teacher", teacherRoutes);

/**
 * Test Endpoint
 */

// Health check endpoint
app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "Backend server is running!" });
});

/**
 * Error Handling Middleware
 */

// 404 Not Found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found. Please check the URL.",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error. Please try again later.",
  });
});

/**
 * START SERVER
 */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Backend server running on port ${PORT}`);
  console.log(`📍 Base URL: http://localhost:${PORT}`);
  console.log(`🔌 MongoDB connected`);
});
