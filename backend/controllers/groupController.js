const Group = require('../models/Group');

exports.createGroup = async (req, res) => {
  try {
    const { name, description, groupAvatar, participants } = req.body;
    // Admin is the logged in user
    const admin = req.user._id;

    const group = new Group({
      name,
      description,
      groupAvatar,
      admin,
      participants: participants ? participants : []
    });

    // Make sure admin is a participant too
    if (!group.participants.includes(admin)) {
      group.participants.push(admin);
    }

    await group.save();
    const populatedGroup = await group.populate('admin participants', 'username avatar');
    res.status(201).json(populatedGroup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.find()
      .populate('admin participants', 'username avatar')
      .sort({ createdAt: -1 });
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.joinGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const userId = req.user._id;

    const group = await Group.findById(groupId);
    if (!group) return res.status(404).json({ error: 'Group not found' });

    if (!group.participants.includes(userId)) {
      group.participants.push(userId);
      await group.save();
    }
    const updatedGroup = await group.populate('admin participants', 'username avatar');
    res.json(updatedGroup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.leaveGroup = async (req, res) => {
  const { groupId } = req.params;
  const userId = req.user._id;

  try {
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    // Remove user from group's members array
    group.members = group.members.filter(
      memberId => memberId.toString() !== userId.toString()
    );

    await group.save();

    res.status(200).json({ message: 'Left group successfully' });
  } catch (error) {
    console.error('Error leaving group:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

