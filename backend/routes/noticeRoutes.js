import express from 'express';
import {
    createNotice,
    getAllNotices,
    getNoticeById,
    updateNotice,
    deleteNotice,
    getRecentNotices
} from '../controllers/noticeController.js';

const router = express.Router();

router.post('/', createNotice);
router.get('/', getAllNotices);
router.get('/recent', getRecentNotices);
router.get('/:id', getNoticeById);
router.put('/:id', updateNotice);
router.delete('/:id', deleteNotice);

export default router;