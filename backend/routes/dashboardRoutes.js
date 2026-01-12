import express from 'express';
import {
    getDashboardStats,
    getAdminDashboard,
    getTeacherDashboard
} from '../controllers/dashboardController.js';

const router = express.Router();

router.get('/stats', getDashboardStats);
router.get('/admin', getAdminDashboard);
router.get('/teacher/:teacherEmail', getTeacherDashboard);

export default router;