const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.send({ success: false, message: "Not Authorized" });
  }
  else {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = decoded.userId;
      req.accessRole = decoded.accessRole;
      console.log(`decoded.accessRole : ${decoded.accessRole} `.yellow)
      next();
    }
    catch (error) {
      res.send({ success: false, message: error.message })
    }
  }
}

module.exports = verifyJwt;
