const router = require('express').Router();
const { orderController } = require('./../Controllers')
const verifyJwt = require('../JWT_Varificarion/verify.jwt');





router.post('/place-order', verifyJwt, orderController.place_order);
router.get('/all', verifyJwt, orderController.get_all_orders);
router.delete('/cancel-order/:orderId', verifyJwt, orderController.cancel_order);



module.exports = router;