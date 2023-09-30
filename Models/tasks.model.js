const mongoose = require('mongoose');

const taskCollection = mongoose.Schema({
  taskName: {
    type: String,
  },
  taskDescription: {
    type: String
  },
  taskStatus: {
    type: String,
    default: 'Pending'
  },

})

module.exports = mongoose.model('tasks', taskCollection);