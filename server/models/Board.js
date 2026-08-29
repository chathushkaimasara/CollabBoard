const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  columns: {
    type: [String],
    default: ['To Do', 'Doing', 'Done'],
  }
}, { timestamps: true });

module.exports = mongoose.model('Board', boardSchema);
