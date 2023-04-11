const jwt = require('jsonwebtoken');
const User = require('../models/auth.model');

module.exports = async (req, res, next) => {
  const secret = '46tydvh785#454';
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(403).send('Access denied.');
    console.log(token);
    const decoded = jwt.verify(token, secret);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};
