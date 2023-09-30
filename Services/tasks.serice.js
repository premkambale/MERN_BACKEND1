const { taskCollecton } = require('../Models');

const findTaskByTaskId = async (req, res) => {
  return await taskCollecton.find({ _id: req.params.taskId })
}

const deleteTaskByTaskId = async (req, res) => {
 const taskId = req.params.taskId;
  const result = await taskCollecton.findByIdAndDelete(taskId);
  return result;
}

module.exports = {
  findTaskByTaskId,
  deleteTaskByTaskId
}