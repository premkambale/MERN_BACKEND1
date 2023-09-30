const { userCollection } = require('./../Models');

// -----------------------------------------------------------------------------------To Find User With email -------------------------------------------------------------------------------------------------------
const findUser = async (req, res) => {
  return await userCollection.findOne({ email: req.body.email });
}


// -----------------------------------------------------------------------------------To Find User With _id -------------------------------------------------------------------------------------------------------

const findUserWithUserId = async (req, res) => {
  return await userCollection.findOne({ _id: req.userId })
}

// 1115 pariksit laptop

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
  findUserWithUserId,
  deleteTaskIdfromTaskArray,
  deletAllUsers
}