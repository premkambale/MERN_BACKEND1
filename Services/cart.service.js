const { userCollection, productCollection } = require('./../Models');

//----------------------------------------------------------------------------------------- To Add Product To Cart-----------------------------------------------------------------------------------
const add_to_cart = async (req) => {
  const productId = req.body?.productId;
  await userCollection.findByIdAndUpdate(req.userId, { $push: { cart: productId } });
  return userCollection.find({ _id: req.userId });
}


//----------------------------------------------------------------------------------------- To Fetch All Products From Cart-----------------------------------------------------------------------------------
const fetch_all_cart_items = async (req) => {
  const user = await userCollection.find({ _id: req.userId });
  return await productCollection.find({ _id: { $in: user[0].cart } })
}

//----------------------------------------------------------------------------------------- To Remove Product From Cart-----------------------------------------------------------------------------------
const delete_cart_item = async (req) => {
  const itemId = req.params.productId;
  return await userCollection.findByIdAndUpdate({ _id: req.userId }, { $pull: { cart: itemId } }, { new: true })

}


module.exports = {
  add_to_cart,
  fetch_all_cart_items,
  delete_cart_item
}