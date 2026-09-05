const Task = require('../models/Task');
const Board = require('../models/Board');

const getTasks = async (req, res) => {
  try {
   
    const tasks = await Task.find({ boardId: req.params.boardId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createTask = async (req, res) => {
  try {
    const { title, description, status, boardId } = req.body;

    if (!title || !boardId) {
      return res.status(400).json({ message: 'Please provide a title and boardId' });
    }

    const task = await Task.create({
      title,
      description: description || '',
      status: status || 'To Do',
      boardId
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const moveTask = async (req, res) => {
  try {
    const { status, version } = req.body;
    
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (version !== undefined && task.__v !== version) {
      return res.status(409).json({ 
        message: 'Conflict: This task was modified by another user.',
        currentTask: task 
      });
    }

    task.status = status;
    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ id: req.params.id, message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTasks, createTask, moveTask, deleteTask };