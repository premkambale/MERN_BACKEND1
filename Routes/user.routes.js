const express = require('express');
const router = express.Router();
const { userController } = require('../Controllers')



router.delete('/all', userController.deleteAllUsers);

module.exports = router;