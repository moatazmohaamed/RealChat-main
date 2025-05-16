const express = require('express');
const router = express.Router();
const privateMessageController = require('../controllers/privateMessageController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, privateMessageController.sendMessage);
router.get('/:receiverId', protect, privateMessageController.getMessages);
router.get('/', protect, privateMessageController.getChatList);
module.exports = router;
