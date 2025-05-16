const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  groupAvatar: { type: String, default: '' },
  description: { type: String, default: '' },
  isGroupChat: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Group', groupSchema);
