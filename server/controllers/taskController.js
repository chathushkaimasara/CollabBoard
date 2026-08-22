let tasks = []; 

const getTasks = (req, res) => res.status(200).json(tasks);

const createTask = (req, res) => {
  const newTask = { id: Date.now(), ...req.body, status: 'To Do' };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id.toString() === id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });
  
  tasks[index] = { ...tasks[index], ...req.body };
  res.status(200).json(tasks[index]);
};

module.exports = { getTasks, createTask, updateTask };