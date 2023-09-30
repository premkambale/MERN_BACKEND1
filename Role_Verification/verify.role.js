const jwt = require('jsonwebtoken');


const verifyRole = (req, res, next) => {
  const role = req.accessRole;
  console.log(`Role : ${role}`.yellow)
  if (!role || role !== "ADMIN") {
    res.send({ success: false, message: 'Not Authorized' });
  }
  else {
    next();
  }
}



module.exports = {
  verifyRole
}