const express = require('express');
const router = express.Router();
const { userController } = require('../Controllers')
const verifyJwt = require('../JWT_Varificarion/verify.jwt')
const { verifyRole } = require('../Role_Verification/verify.role')


// --------------------------------------------------------------------------------------------Admin Routes-----------------------------------------------------------------------------------------
router.get('/all', verifyJwt,verifyRole, userController.get_all_users);
router.get('/user/:userId' , verifyJwt , verifyRole , userController.get_user_by_userID)
router.delete('/all',verifyJwt,verifyRole, userController.deleteAllUsers);

module.exports = router;