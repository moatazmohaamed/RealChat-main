const Message = require('../models/Message');

exports.getMessagesByGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const messages = await Message.find({ chatRoom: groupId })
      .populate('sender', 'username avatar')
      .sort({ createdAt: 1 }); // oldest first
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
