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
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tasks',
  }]
}, {
  timestamps: true, // Add timestamps option here
}
)

module.exports = mongoose.model("User", userRegistrationSchema);