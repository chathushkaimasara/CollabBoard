
const Task = require('../models/Task');


const getTasks = async (req, res) => {
  const tasks = await Task.find(); // Later, add { user: req.user.id } to filter by user
  res.status(200).json(tasks);
};


const createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: 'Please add a title field' });
  }

  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status || 'To Do',
  });

  res.status(201).json(task);
};


const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
};

module.exports = { getTasks, createTask, updateTask };