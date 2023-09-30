const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    res.send({ success: false, message: "Not Authorised" });
  }
  else { 
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const userId =  decoded.userId;
      console.log(`${userId}`.yellow);
      req.userId = decoded.userId;
      next();
    }
    catch (error) {
      res.send({ success: false, message: error.message })
    }
  }
}

module.exports = verifyJwt;