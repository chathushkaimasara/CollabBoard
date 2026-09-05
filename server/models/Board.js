const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a board name'],
    default: 'My SyncBoard'
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' 
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Board', boardSchema);