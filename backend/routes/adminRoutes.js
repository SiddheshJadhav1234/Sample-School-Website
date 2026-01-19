import express from "express";
import { verifyToken, authorize } from "../middleware/auth.js";
import {
  createStudent,
  createTeacher,
  getAllStudents,
  getAllTeachers,
} from "../controllers/adminController.js";

const router = express.Router();

/**
 * Protected Routes - Admin Only
 * All routes require:
 * 1. Valid JWT token (verifyToken)
 * 2. User role must be "admin" (authorize)
 */

/**
 * Student Management
 */

// Create new student
// POST /api/admin/create-student
router.post("/create-student", verifyToken, authorize(["admin"]), createStudent);

// Get all students with pagination and filters
// GET /api/admin/students?page=1&limit=10&class=5A
router.get("/students", verifyToken, authorize(["admin"]), getAllStudents);

/**
 * Teacher Management
 */

// Create new teacher
// POST /api/admin/create-teacher
router.post("/create-teacher", verifyToken, authorize(["admin"]), createTeacher);

// Get all teachers with pagination and filters
// GET /api/admin/teachers?page=1&limit=10&subject=Mathematics
router.get("/teachers", verifyToken, authorize(["admin"]), getAllTeachers);

export default router;
