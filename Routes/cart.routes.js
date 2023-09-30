const router = require('express').Router();
const verifyJwt = require('../JWT_Varificarion/verify.jwt');
const { cartController } = require('../Controllers')

router.put('/add-to-cart', verifyJwt, cartController.add_to_cart);
router.get('/items',verifyJwt , cartController.get_all_cart_items);
router.delete('/remove-item/:productId',verifyJwt , cartController.remove_cart_item);



module.exports = router;