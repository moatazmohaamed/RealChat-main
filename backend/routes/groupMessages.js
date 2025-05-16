const express = require('express');
const router = express.Router();
const GroupMessage = require('../models/GroupMessage');
const { protect } = require('../middleware/authMiddleware');

// GET /api/groups/:groupId/messages
router.get('/:groupId/messages', protect, async (req, res) => {
  const { groupId } = req.params;

  try {
    const messages = await GroupMessage.find({ group: groupId })
      .populate('sender', 'name') // Optional: to get sender name
      .sort({ timestamp: 1 });

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching group messages:', error);
    res.status(500).json({ message: 'Failed to fetch group messages' });
  }
});

module.exports = router;
