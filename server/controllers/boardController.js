const Board = require('../models/Board');

const createBoard = async (req, res) => {
  try {
    const { title } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: 'Board title is required' });
    }

    const board = await Board.create({
      title,
      owner: req.user.userId, 
    });

    res.status(201).json(board);
  } catch (error) {
    console.error('Error creating board:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ owner: req.user.userId });
    res.status(200).json(boards);
  } catch (error) {
    console.error('Error fetching boards:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const deleteBoard = async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);

    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }

    if (board.owner.toString() !== req.user.userId) {
      return res.status(401).json({ message: 'Not authorized to delete this board' });
    }

    await board.deleteOne();
    res.status(200).json({ message: 'Board removed' });
  } catch (error) {
    console.error('Error deleting board:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createBoard, getBoards, deleteBoard };