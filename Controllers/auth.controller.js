const { userCollection } = require('./../Models')
const { authService, userService } = require('../Services')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// ----------------------------------------------------------------------------------- Register User----------------------------------------------------------------------
const registerUser = async (req, res) => {
  const isUserRegistered = await authService.isEmailRegistered(req);
  console.log("Register Request", req);


  
  if (isUserRegistered == true) {
    return res.status(409).send({ message: 'user has already been regestered with this mail', success: false })
  }


  async function getHashedPass(password) {
    return await bcrypt.hash(password, 10);
  }

  const payload = { ...req.body };
  payload.password = await getHashedPass(req.body.password);

  const newUser = new userCollection(payload);

  try {
    await newUser.save();
    res.send({
      message: 'user Registered Sucessfully',
      success: true,
    })
  }
  catch (error) {
    res.send({ message: error.message })
  }

}


// ----------------------------------------------------------------------------------- Login User----------------------------------------------------------------------

const login = async (req, res) => {

  const isUserRegistered = await authService.isEmailRegistered(req);
  const user = await userService.findUser(req);

  // if user registered or not
  if (isUserRegistered === true) {

    // to compare with hashed password
    const matchPassword = await bcrypt.compare(req.body.password, user.password);

    if (matchPassword == true) {

      // generate jwt token
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
      res.send({ success: true, message: 'Logged In Sucessfully', token: token, role: user.role });
    }
    else {
      res.send({ success: false, message: "Invalid User id and password" })
    }
  }
  else {
    res.send({ success: false, message: "User is not registered with given email" });
  }
}


module.exports = {
  registerUser,
  login,
};