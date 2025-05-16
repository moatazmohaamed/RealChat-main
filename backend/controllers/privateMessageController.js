const PrivateMessage = require('../models/PrivateMessage');
const mongoose = require('mongoose');

// Send a private message
exports.sendMessage = async (req, res) => {
  const senderId = req.user._id;
  const { receiverId, message } = req.body;

  try {
    const newMessage = await PrivateMessage.create({
      sender: senderId,
      receiver: receiverId,
      message
    });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message' });
  }
};

// Get all messages between current user and receiver
exports.getMessages = async (req, res) => {
  const senderId = req.user._id;
  const { receiverId } = req.params;

  try {
    const messages = await PrivateMessage.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId }
      ]
    }).sort({ timestamp: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get messages' });
  }
};
//GEt All CHat List
exports.getChatList = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user._id);

  try {
    const chatList = await PrivateMessage.aggregate([
      {
        $match: {
          $or: [
            { sender: userId },
            { receiver: userId }
          ]
        }
      },
      {
        $sort: { timestamp: -1 }
      },
      {
        $project: {
          message: 1,
          timestamp: 1,
          user: {
            $cond: [
              { $eq: ['$sender', userId] },
              '$receiver',
              '$sender'
            ]
          }
        }
      },
      {
        $group: {
          _id: '$user',
          lastMessage: { $first: '$message' },
          lastTime: { $first: '$timestamp' }
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: '_id',
          as: 'userInfo'
        }
      },
      {
        $unwind: '$userInfo'
      },
      {
        $project: {
          userId: '$_id',
          name: '$userInfo.name',
          email: '$userInfo.email',
          lastMessage: 1,
          lastTime: 1
        }
      },
      {
        $sort: { lastTime: -1 }
      }
    ]);

    res.status(200).json(chatList);
  } catch (error) {
    console.error('Error getting chat list:', error);
    res.status(500).json({ message: 'Failed to get chat list' });
  }
};