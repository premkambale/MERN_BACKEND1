const { orderCollection, userCollection } = require('../Models');

const delete_order = async (req, res) => {
  return await orderCollection.findOneAndDelete({ _id: req.params.orderId })
}

const get_orders_of_current_user = async (req) => {
  const user = await userCollection.find({ _id: req.userId });
  console.log(`${user[0].orders}`.red);
  return await orderCollection.find({ _id: { $in: user[0].orders } });
}

module.exports = {
  delete_order,
  get_orders_of_current_user
}