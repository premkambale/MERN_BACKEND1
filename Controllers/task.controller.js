const { taskCollecton, userCollection } = require('../Models');
const { userService, taskService } = require('./../Services');


// ----------------------------------------------------------------------------------- Create New Task----------------------------------------------------------------------

const createTask = async (req, res) => {
  const newTask = new taskCollecton({ ...req.body });

  try {
    newTask.save();
    await userCollection.findByIdAndUpdate(req.userId, { $push: { tasks: newTask._id } })
    res.send({ success: true, message: "task created successfully" });
  }
  catch (error) {
    res.send({ success: false, message: error.message })
  }
}

// ----------------------------------------------------------------------------------- Get All Tasks----------------------------------------------------------------------

const getAllTasks = async (req, res) => {
  try {

    const user = await userService.findUserWithUserId(req);
    const tasks = await taskCollecton.find({ _id: { $in: user.tasks } });
    if (user.tasks.length == 0) {
      return res.send({ success: true, message: "No Tasks Created" });
    }
    else {
      return res.send({ success: true, data: tasks })
    }
  }
  catch (error) {
    return res.send({ success: false, message: error.message })
  }
}

// ----------------------------------------------------------------------------------- Get Task By taskId ----------------------------------------------------------------------
const getTaskByTaskId = async (req, res) => {
  console.log(`${req.params.taskId}`.yellow)
  try {
    const task = await taskService.findTaskByTaskId(req);
    if (task.length !== 0) {
      return res.send({ success: true, data: task })
    }
    else {
      return res.send({ success: false, message: "No Task Found With Given Task Id" })
    }
  } catch (error) {
    res.send({ success: false, message: error.message })
  }
}

// ----------------------------------------------------------------------------------- Delete Task By taskId ----------------------------------------------------------------------
const deleteTaskByTaskId = async (req, res) => {
  const user = await userService.findUserWithUserId(req);
  const tasks = user.tasks;
  // console.log(user)
  // console.log(tasks)

  if (tasks.length == 0) {
    return res.send({ success: false, message: `couldn't find the task for given taskId` })
  }
  else {
    const removed = await userService.deleteTaskIdfromTaskArray(req);
    console.log("removed",removed)
    try {
     
      const removedFromTask =  await taskService.deleteTaskByTaskId(req);
      console.log("removedFromTask",removedFromTask)

      if (!removed) {
        res.send({ success: false, message: `User not found` })
      }
      else {
        res.send({ success: true, message: "Task Deleted Successfully" })
      }
    }
    catch (error) {
      res.send({ success: false, message: "Internal Server Error" })
    }
  }
}


module.exports = {
  createTask,
  getAllTasks,
  getTaskByTaskId,
  deleteTaskByTaskId
}