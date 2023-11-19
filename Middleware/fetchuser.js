const jwt = require('jsonwebtoken');
const JWT_SECRET = "imran@123";

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send("Token is Not Valid");
  }
  try {
    const jwtVerification = jwt.verify(token, JWT_SECRET);
    req.user = jwtVerification.user;
    next();
  } catch (error) {
    res.status(401).send("User not found with this token");
  }
};

module.exports = fetchuser;
