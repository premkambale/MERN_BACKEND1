const { productCollection } = require('../Models');
const { productService } = require('../Services')

// ----------------------------------------------------------------------------------- Create New Product----------------------------------------------------------------------

const create_products = (req, res) => {
    const newProduct = new productCollection({ ...req.body });
    console.log("New Product Request:", req.body)

    try {
        newProduct.save();
        res.send({ success: true, message: 'product added successfully' })
    }
    catch (error) {
        res.send({ success: true, message: error.message })
    }
}


// ----------------------------------------------------------------------------------- Create New Product----------------------------------------------------------------------
const get_all_products = async (req, res) => {
    try {
        const products = await productService.fetchAllProducts(req);

        if (products) {
            res.send({ success: true, data: products })
        }
        else {
            res.send({ status: false, message: "no products are available" })
        }
    }
    catch (error) {
        res.send({ success: false, message: error.message })
    }
}


// ----------------------------------------------------------------------------------- Get Product By ProductId----------------------------------------------------------------------
const get_product = async (req, res) => {
    try {
        const product = await productService.fetchProductWithProductId(req);
        if (product) {
            res.send({ success: true, data: product });
        }
        else {
            res.send({ success: false, message: "no product is available" })
        }
    } catch (error) {
        res.send({ success: false, message: error.message })
    }
}

// ----------------------------------------------------------------------------------- Get Products By Category----------------------------------------------------------------------
const get_products_with_category = async (req, res) => {
    try {
        const products = await productService.fetch_products_with_category(req);
        if (products) {
            res.send({ success: true, data: products });
        }
        else {
            res.send({ success: false, message: "no products are available" })
        }
    } catch (error) {
        res.send({ success: false, message: error.message })
    }
}


// ----------------------------------------------------------------------------------- Delete Product By ProductId----------------------------------------------------------------------
const delete_product_by_product_id = async (req, res) => {
    try {
        const product = productService.delete_product_by_id(req);
        if (product) {
            res.send({ success: true, message: "product deleted successfully" })
        }
        else {
            res.send({ success: false, message: 'could not delete the product' });
        }
    } catch (error) {
        res.send({ success: false, message: error.message })
    }
}

// ----------------------------------------------------------------------------------- Update Product Schema----------------------------------------------------------------------
const update_product_schema = async (req, res) => {
    try {
        await productCollection.updateMany({}, { $set: { quantity: 1 } })
        res.send({ success: true, message: "schema updated successfully" })
    }
    catch (error) {
        res.send({ success: false, message: error.message })
    }
}


const edit_product_by_id = async (req, res) => {
    try {
        const updatedProduct = await productService.update_product_by_id(req);

        if (updatedProduct) {
            res.send({ success: true, message: "product updated successfully",data : updatedProduct });
        }
        else {
            res.send({ success: false, message: "failed to update success" })
        }
    }
    catch (error) {
        res.send({ success: false, message: error.messsage })
    }
}



module.exports = {
    create_products,
    get_all_products,
    get_product,
    get_products_with_category,
    delete_product_by_product_id,
    update_product_schema,
    edit_product_by_id
}