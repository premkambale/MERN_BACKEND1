const { productCollection } = require('../Models');

// -----------------------------------------------------------------------------------To Fetch All Products-------------------------------------------------------------------------------------------------------
const fetchAllProducts = async (req) => {
    return await productCollection.find();
}


// -----------------------------------------------------------------------------------To Fetch Product By Product Id-------------------------------------------------------------------------------------------------------
const fetchProductWithProductId = async (req) => {
    return await productCollection.findById({ _id: req.params.productId })
}

// -----------------------------------------------------------------------------------To Fetch Products By Category-------------------------------------------------------------------------------------------------------
const fetch_products_with_category = async (req, res) => {
    return await productCollection.find({ category: req.params.category })
}

// -----------------------------------------------------------------------------------To Delete Product By Product Id-------------------------------------------------------------------------------------------------------
const delete_product_by_id = async (req) => {
    return await productCollection.findOneAndDelete({ _id: req.params.productId })
}


// -----------------------------------------------------------------------------------To Edit Product By Product Id-------------------------------------------------------------------------------------------------------
const update_product_by_id = async (req) => {
    const productId = req.params.productId;
    const productToUpdate = req.body;
    return await productCollection.findByIdAndUpdate(productId, productToUpdate, { new : true });
}

module.exports = {
    fetchAllProducts,
    fetchProductWithProductId,
    fetch_products_with_category,
    delete_product_by_id,
    update_product_by_id
}