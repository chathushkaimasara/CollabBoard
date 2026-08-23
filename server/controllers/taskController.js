const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  if (req.body.__v !== undefined && req.body.__v !== task.__v) {
    return res.status(409).json({ 
      message: 'Conflict: This task was modified by another user. Please refresh.' 
    });
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.status = req.body.status || task.status;
  
  const updatedTask = await task.save();
  res.status(200).json(updatedTask);
};