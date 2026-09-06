const Board = require('../models/Board');

const getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ ownerId: req.user.id });
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new board
const createBoard = async (req, res) => {
  try {
    const { name } = req.body;
    
    let ownerId = req.userId || (req.user && (req.user._id || req.user.id || req.user.userId));
    
    if (!ownerId) {
      const mongoose = require('mongoose');
      ownerId = new mongoose.Types.ObjectId();
    }

    const newBoard = await Board.create({ 
      name, 
      ownerId 
    });

    res.status(201).json(newBoard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBoard = async (req, res) => {
  try {
    const board = await Board.findByIdAndDelete(req.params.id);
    
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }

    res.status(200).json({ id: req.params.id, message: 'Board deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBoards, createBoard, deleteBoard };