import Notice from "../models/Notice.js";

// Create notice
export const createNotice = async (req, res) => {
    try {
        const notice = new Notice(req.body);
        await notice.save();
        res.status(201).json({ message: "Notice created successfully", notice });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all active notices
export const getAllNotices = async (req, res) => {
    try {
        const { targetAudience } = req.query;
        let query = { isActive: true };
        
        if (targetAudience && targetAudience !== 'all') {
            query.$or = [
                { targetAudience: 'all' },
                { targetAudience: targetAudience }
            ];
        }

        const notices = await Notice.find(query).sort({ priority: -1, publishDate: -1 });
        res.json(notices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get notice by ID
export const getNoticeById = async (req, res) => {
    try {
        const notice = await Notice.findById(req.params.id);
        if (!notice) {
            return res.status(404).json({ message: "Notice not found" });
        }
        res.json(notice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update notice
export const updateNotice = async (req, res) => {
    try {
        const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!notice) {
            return res.status(404).json({ message: "Notice not found" });
        }
        res.json({ message: "Notice updated successfully", notice });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete notice
export const deleteNotice = async (req, res) => {
    try {
        const notice = await Notice.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
        if (!notice) {
            return res.status(404).json({ message: "Notice not found" });
        }
        res.json({ message: "Notice deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get recent notices (for dashboard)
export const getRecentNotices = async (req, res) => {
    try {
        const notices = await Notice.find({ isActive: true })
            .sort({ publishDate: -1 })
            .limit(5);
        res.json(notices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};