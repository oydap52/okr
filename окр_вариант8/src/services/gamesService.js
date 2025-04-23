const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../db/db.json');

const getAllGames = () => {
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  return db.games;
};

const getGameById = (id) => {
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  return db.games.find(game => game.id === id);
};

module.exports = { getAllGames, getGameById };