const express = require('express');
const router = express.Router();
const {
  createGroup,
  getGroups,
  joinGroup,
  leaveGroup
} = require('../controllers/groupController');

const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getGroups);
router.post('/create', protect, createGroup);
router.post('/:groupId/join', protect, joinGroup);
router.delete('/:groupId/leave', protect, leaveGroup);

module.exports = router;
