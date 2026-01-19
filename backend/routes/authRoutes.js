import express from "express";
import { signup, login } from "../controllers/authController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/**
 * Public Routes (No authentication required)
 */

// Signup route - Create new user account
router.post("/signup", signup);

// Login route - Authenticate user and get JWT token
router.post("/login", login);

export default router;