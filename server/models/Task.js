const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a task title']
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['To Do', 'Doing', 'Done'],
    default: 'To Do'
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Board' 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);