const express = require('express');
const router = express.Router();
const { createBoard, getBoards, deleteBoard } = require('../controllers/boardController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/')
  .get(getBoards)
  .post(createBoard);

router.route('/:id')
  .delete(deleteBoard);

router.get('/test', (req, res) => {
  res.json({
    message: 'Protected Board route working',
    userMakingRequest: req.user.userId,
  });
});

module.exports = router;