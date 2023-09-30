const { userCollection } = require('./../Models');

const isEmailRegistered = async (req) => {
  const user = await userCollection.findOne({ email: req.body.email })
  if (user) {
    return true;
  }
  else {
    return false;
  }
}

const deleteUser = async (req) => {
  return await userCollection.findOneAndDelete({ email: req.params.email });
}

module.exports = {
  isEmailRegistered,
  deleteUser
}