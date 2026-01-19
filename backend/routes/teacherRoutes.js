import express from "express";
import { verifyToken, authorize } from "../middleware/auth.js";
import {
  getMyProfile,
  getAssignedStudents,
  getTeacherById,
} from "../controllers/teacherController.js";

const router = express.Router();

/**
 * Protected Routes - Teacher Only
 * All routes require:
 * 1. Valid JWT token (verifyToken)
 * 2. User role must be "teacher" (authorize)
 */

// Get teacher's own profile
// GET /api/teacher/me
router.get("/me", verifyToken, authorize(["teacher"]), getMyProfile);

// Get all students assigned to this teacher
// GET /api/teacher/students?classLevel=5A (optional filter)
router.get(
  "/students",
  verifyToken,
  authorize(["teacher"]),
  getAssignedStudents
);

/**
 * Admin Routes
 */

// Get specific teacher by ID
// GET /api/teacher/:teacherId
router.get("/:teacherId", verifyToken, getTeacherById);

export default router;
