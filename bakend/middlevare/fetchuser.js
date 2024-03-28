var jwt = require('jsonwebtoken');
const JWT_SECRET = 'haryyisbro';

const fetchuser = (req, res, next) => {
  // Get user from jwt token and add to req object
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({'message': 'Please authenticate using a valid token'});
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).send({'message': 'Please authenticate using a valid token'});
  }
}

module.exports = fetchuser;
