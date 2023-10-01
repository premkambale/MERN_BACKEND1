const { userService, cartService } = require('../Services');



// ----------------------------------------------------------------------------------- Add Product To Cart----------------------------------------------------------------------

const add_to_cart = async (req, res) => {
  try {
    const user = await userService.fetch_current_user(req);

    if (!user) {
      res.send({
        success: false,
        message: 'failed to add product to cart'
      });
    }
    else {
      const userCart = await cartService.add_to_cart(req);
      if (userCart) {
        res.send({
          success: true,
          message: "added to cart successfully",
          cartLength: userCart[0].cart.length
        })
      }
      else {
        res.send({
          success: false,
          message: 'failed to add product to cart'
        });
      }
    }
  }
  catch (error) {
    res.send({ success: false, message: error.message });
  }

}


// ----------------------------------------------------------------------------------- Get All Products From Cart----------------------------------------------------------------------
const get_all_cart_items = async (req, res) => {
  try {
    const cartItems = await cartService.fetch_all_cart_items(req);
    if (cartItems) {
      res.send({ success: true, data: cartItems })
    }
    else {
      res.send({
        success: false,
        message: "no items are added in cart"
      })
    }
  }
  catch (error) {
    res.send({ success: false, message: error.message });
  }
}


// ----------------------------------------------------------------------------------- Delete Product From Cart----------------------------------------------------------------------
const remove_cart_item = async (req, res) => {
  try {
    const item = await cartService.delete_cart_item(req);
    if (item) {
      res.send({
        success: true,
        message: "item removed successfully from cart"
      });
    }
    else {
      res.send({
        success: false,
        message: "failed to remove item from cart"
      });
    }
  }
  catch (error) {
    res.send({ success: false, message: error.message })
  }
}


module.exports = {
  add_to_cart,
  get_all_cart_items,
  remove_cart_item
}