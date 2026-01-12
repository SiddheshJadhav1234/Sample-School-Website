import express from 'express';
import {
    addMarks,
    getMarksByStudent,
    getMarksByClassAndExam,
    updateMarks,
    getStudentPerformance,
    getClassPerformance
} from '../controllers/marksController.js';

const router = express.Router();

router.post('/', addMarks);
router.get('/student/:studentId', getMarksByStudent);
router.get('/class/:className/:section/:examType', getMarksByClassAndExam);
router.get('/performance/student/:studentId', getStudentPerformance);
router.get('/performance/class/:className/:section', getClassPerformance);
router.put('/:id', updateMarks);

export default router;