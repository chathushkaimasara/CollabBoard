const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.get('/test', protect, (req, res) => {
  res.json({ 
    message: 'Protected Board route working', 
    userMakingRequest: req.user.userId 
  });
});

module.exports = router;