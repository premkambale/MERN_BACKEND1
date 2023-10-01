const { orderCollection, productCollection, userCollection } = require('../Models/');
const { orderService, userService } = require('../Services');
// ----------------------------------------------------------------------------------------To Place Order -------------------------------------------------------------------------------------
const place_order = async (req, res) => {
  try {
    const order = new orderCollection(req.body);
    console.log(order)
    order.save();
    await userCollection.findByIdAndUpdate(req.userId, { $push: { orders: order._id } });
    res.send({ success: true, message: 'order placed sucessfully' });
  }
  catch (error) {
    res.send({ success: false, message: 'failed to place order' });
    console.log(`${error.message}`.red)
  }
}


// ----------------------------------------------------------------------------------------To Cancel Order -------------------------------------------------------------------------------------

const cancel_order = async (req, res) => {
  const order = await orderService.delete_order(req);
  const removedFromUSer = await userService.delete_order_from_user(req);
  console.log(`${removedFromUSer}`.red)
  if (!order) {
    res.send({ success: false, message: "failed to cancel the order" })
  }
  else {
    try {

      if (removedFromUSer) {
        res.send({ success: true, message: 'order canceled sucessfully' });
      }
      else {
        res.send({ success: false, message: 'failed to cancel order' });
      }

    }
    catch (error) {
      res.send({ success: false, message: 'failed to cancel order' });
      console.log(`${error.message}`.red);
    }
  }
}


// ----------------------------------------------------------------------------------------To Get Orders -------------------------------------------------------------------------------------

const get_all_orders = async (req, res) => {
  const user = await userService.fetch_current_user(req);
  if (!user) {
    res.send({ success: true, message: 'failed to fetch orders' });
  }
  else {
    try {
      const orders = await orderService.get_orders_of_current_user(req);
      if (orders) {
        res.send({ success: true, data: orders })
      }
      else {
        res.send({ success: false, message: 'you have no orders' })
      }
    }
    catch (error) {
      res.send({ success: false, message: 'failed to fetch order' });
      console.log(`${error.message}`.red);
    }
  }

}



module.exports = {
  place_order,
  get_all_orders,
  cancel_order
}