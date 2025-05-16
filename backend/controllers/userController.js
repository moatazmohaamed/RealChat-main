const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    // Exclude password field
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
