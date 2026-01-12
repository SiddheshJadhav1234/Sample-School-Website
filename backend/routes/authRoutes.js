import express from 'express';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Separate routes for admin and teacher login (optional)
router.post('/admin/login', login);
router.post('/teacher/login', login);

export default router;