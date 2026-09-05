const Board = require('../models/Board');

const getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ ownerId: req.user.id });
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBoard = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: 'Please add a board name' });
    }

    const board = await Board.create({
      name: req.body.name,
      ownerId: req.user.id
    });

    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBoards, createBoard };