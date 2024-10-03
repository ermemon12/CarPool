const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, 'jwtSecret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
