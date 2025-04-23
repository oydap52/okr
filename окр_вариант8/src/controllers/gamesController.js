const gamesService = require('../services/gamesService');

const getAllGames = (req, res) => {
  const games = gamesService.getAllGames();
  res.status(200).json(games);
};

const getGameById = (req, res) => {
  const game = gamesService.getGameById(req.params.id);
  if (game) {
    res.status(200).json(game);
  } else {
    res.status(404).json({ error: 'Игра не найдена' });
  }
};

module.exports = { getAllGames, getGameById };