const { userCollection } = require('./../Models');

// -----------------------------------------------------------------------------------To Find User With email -------------------------------------------------------------------------------------------------------
const fetch_all_users = async (req, res) => {
  return await userCollection.find();
}


// -----------------------------------------------------------------------------------To Find User With email -------------------------------------------------------------------------------------------------------
const findUser = async (req, res) => {
  return await userCollection.findOne({ email: req.body.email });
}


// -----------------------------------------------------------------------------------To Find Current User -------------------------------------------------------------------------------------------------------

const fetch_current_user = async (req, res) => {
  return await userCollection.findOne({ _id: req.userId })
}


// -----------------------------------------------------------------------------------To User By user _id -------------------------------------------------------------------------------------------------------
const fetch_user_by_id = async (req) => {
  return await userCollection.find({ _id: req.params.userId });
}

// -----------------------------------------------------------------------------------To Delete TaskId From Task Array Of Users----------------------------------------------------------------------

const deleteTaskIdfromTaskArray = async (req, res) => {
  const taskIdToRemove = req.params.taskId;
  const userId = req.userId;
  return await userCollection.findOneAndUpdate(
    { _id: userId },
    { $pull: { tasks: taskIdToRemove } },
    { new: true }
  )
}

// -----------------------------------------------------------------------------------To Delete All Users-------------------------------------------------------------------------------------------------------

const deletAllUsers = async (req, res) => {
  return await userCollection.deleteMany();
}
module.exports = {
  findUser,
  fetch_current_user,
  deleteTaskIdfromTaskArray,
  deletAllUsers,
  fetch_all_users,
  fetch_user_by_id
}