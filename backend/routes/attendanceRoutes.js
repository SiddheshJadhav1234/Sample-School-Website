import express from 'express';
import {
    markAttendance,
    getAttendanceByClassAndDate,
    getStudentAttendance,
    getAttendanceStats
} from '../controllers/attendanceController.js';

const router = express.Router();

router.post('/', markAttendance);
router.get('/stats', getAttendanceStats);
router.get('/class/:className/:section/:date', getAttendanceByClassAndDate);
router.get('/student/:studentId', getStudentAttendance);

export default router;