const Task = require('../models/Task');
const Board = require('../models/Board');


const createTask = async (req, res) => {
  try {
    const { title, description, boardId, status } = req.body;

    if (!title || !boardId) {
      return res.status(400).json({ message: 'Title and Board ID are required' });
    }

  
    const board = await Board.findById(boardId);
    if (!board || board.owner.toString() !== req.user.userId) {
      return res.status(404).json({ message: 'Board not found or unauthorized' });
    }

    const task = await Task.create({
      title,
      description,
      status: status || 'To Do',
      boardId,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ boardId: req.params.boardId });
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;

    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.deleteOne();
    res.status(200).json({ message: 'Task removed' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };