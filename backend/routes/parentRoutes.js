import express from "express";
import { verifyToken, authorize } from "../middleware/auth.js";
import {
  getMyChild,
  getMyProfile,
  linkParentToStudent,
} from "../controllers/parentController.js";

const router = express.Router();

/**
 * Protected Routes - Parent Only
 * All routes require:
 * 1. Valid JWT token (verifyToken)
 * 2. User role must be "parent" (authorize)
 */

// Get parent's linked child data
// GET /api/parent/my-child
// Response includes child's name, class, roll number, etc.
// Parent can ONLY access their linked child's data (secure)
router.get("/my-child", verifyToken, authorize(["parent"]), getMyChild);

// Get parent's own profile
// GET /api/parent/me
router.get("/me", verifyToken, authorize(["parent"]), getMyProfile);

/**
 * Admin Routes for linking parent to student
 * (Should be called by admin UI when creating relationships)
 */

// Link parent to child (admin only)
// POST /api/parent/link
router.post("/link", verifyToken, authorize(["admin"]), linkParentToStudent);

export default router;
