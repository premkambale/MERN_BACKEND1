const express = require('express');
const router = express.Router();
const { taskController, authController } = require('../Controllers');

const verifyJwt = require('../JWT_Varificarion/verify.jwt');

router.post('/create-task', verifyJwt, taskController.createTask);
router.get('/all', verifyJwt, taskController.getAllTasks);
router.get('/task/:taskId', verifyJwt, taskController.getTaskByTaskId);
router.delete('/task/:taskId', verifyJwt, taskController.deleteTaskByTaskId);


// module export router;
module.exports = router;