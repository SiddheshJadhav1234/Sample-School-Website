import express from 'express';
import {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentsByClass,
    getStudentStats
} from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getAllStudents);
router.get('/stats', getStudentStats);
router.get('/:id', getStudentById);
router.get('/class/:className/:section', getStudentsByClass);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;