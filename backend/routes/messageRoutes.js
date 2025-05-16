const express = require('express');
const router = express.Router();
const { getMessagesByGroup } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

router.get('/:groupId', protect, getMessagesByGroup);

module.exports = router;
