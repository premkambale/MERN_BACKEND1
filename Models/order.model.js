const mongoose = require('mongoose');


const orderCollection = mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products'
  }],
  numberOfProducts: {
    type: Number,
    default: 0,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  shippingAddress: {
    type: String,
    required: true
  },
  orderStatus: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
  },
  orderDate: {
    type: Date,
    default: Date.now,
  }
},{timestamps : true})


module.exports = mongoose.model('orders', orderCollection);