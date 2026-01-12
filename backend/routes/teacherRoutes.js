import express from 'express';
import {
    getAllTeachers,
    getTeacherById,
    addTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacherStats
} from '../controllers/teacherController.js';

const router = express.Router();

router.get('/', getAllTeachers);
router.get('/stats', getTeacherStats);
router.get('/:id', getTeacherById);
router.post('/', addTeacher);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;