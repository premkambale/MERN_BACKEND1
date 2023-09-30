const express = require('express');
const router = express.Router();
const { productcontroller } = require('./../Controllers')

// route for creating new product
router.post('/add-product', productcontroller.create_products);
router.get('/', productcontroller.get_all_products);
router.get('/product/:productId', productcontroller.get_product);
router.get('/:category',productcontroller.get_products_with_category);


router.delete('/product/:productId', productcontroller.delete_product_by_product_id);

router.put('/',productcontroller.update_product_schema);
router.put('/product/:productId',productcontroller.edit_product_by_id);



module.exports = router;