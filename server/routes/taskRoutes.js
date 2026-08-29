const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');


router.use(protect);


router.route('/')
  .post(createTask);

router.route('/:id')
  .put(updateTask)
  .delete(deleteTask);


router.route('/:boardId')
  .get(getTasks);

module.exports = router;