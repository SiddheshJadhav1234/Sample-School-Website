import express from "express";
import { verifyToken, authorize } from "../middleware/auth.js";
import {
  getMyProfile,
  getStudentById,
  getStudentsByClass,
} from "../controllers/studentController.js";

const router = express.Router();

/**
 * Protected Routes - Student Only
 * All routes require:
 * 1. Valid JWT token (verifyToken)
 * 2. User role must be "student" (authorize)
 */

// Get student's own profile
// GET /api/student/me
router.get("/me", verifyToken, authorize(["student"]), getMyProfile);

// Get student by ID (admin can call this)
// GET /api/student/:studentId
router.get("/:studentId", verifyToken, getStudentById);

// Get all students in a class (teacher can view their class students)
// GET /api/student/class?class=5A&section=A
router.get("/class", verifyToken, getStudentsByClass);

export default router;
