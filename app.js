const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const PlayerModel = require('./src/model/playerModel');
const PlayerController = require('./src/controller/playerController');

const app = express();
const port = 8080;

const db = new sqlite3.Database('players.db');
const playerModel = new PlayerModel(db);
const playerController = new PlayerController(playerModel);

db.run(`
  CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY,
    login TEXT,
    password TEXT,
    balance_level INTEGER,
    balance_currency REAL,
    countryCode TEXT
  )
`);

app.use(express.json());

// Need for correct using static e.g. css, img etc.
app.use(express.static(__dirname + '/src'));

// UI representation for sending data on server via POST action
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/player', playerController.getAllPlayers.bind(playerController));
app.post('/player', playerController.addPlayer.bind(playerController));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});