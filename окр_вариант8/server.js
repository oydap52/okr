require('dotenv').config();
const express = require('express');
const gamesRouter = require('./src/routes/gamesRoutes');

const app = express();
const port = process.env.PORT || 5173;

app.use(express.json());
app.use('/games', gamesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});