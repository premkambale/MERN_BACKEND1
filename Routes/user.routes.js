const express = require('express');
const router = express.Router();
const { userController } = require('../Controllers')


router.get('/all' , userController.get_all_users);
router.delete('/all', userController.deleteAllUsers);

module.exports = router;