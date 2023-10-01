const mongoose = require('mongoose');

const userRegistrationSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  mobileNo: {
    type: Number
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER'
  },
  cart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
  }],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'orders'
    }
  ]
}, {
  timestamps: true, // Add timestamps option here
}
)

module.exports = mongoose.model("User", userRegistrationSchema);