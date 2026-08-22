const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a task title'],
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ['To Do', 'Doing', 'Done'],
      default: 'To Do',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false, // Set to true once user registration is fully built
      ref: 'User',
    },
  },
  {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Task', taskSchema);