const express = require('express');
const request = require('supertest');
const sqlite3 = require('sqlite3').verbose();
const PlayerModel = require('../../src/model/playerModel');
const PlayerController = require('../../src/controller/playerController');

const app = express();
const db = new sqlite3.Database(':memory:');
const playerModel = new PlayerModel(db);
const playerController = new PlayerController(playerModel);

app.use(express.json());

app.get('/player', playerController.getAllPlayers.bind(playerController));
app.post('/player', playerController.addPlayer.bind(playerController));

describe('PlayerController', () => {
  beforeAll(() => {

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
  });

  afterAll(() => {
    db.close();
  });

  test('should get all players', async () => {
    try {
      const response = await request(app).get('/player');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    } catch (error) {
      throw error;
    }
  });

  test('should add a new player', async () => {
    try {
      const newPlayerData = {
        login: 'testuser',
        password: 'testpassword',
        balance: { level: 5, currencyBalance: 100.0 },
        countryCode: 'US'
      };

      const response = await request(app)
        .post('/player')
        .send(newPlayerData);

      expect(response.status).toBe(201);
      expect(response.body.message).toBe('Player data inserted');
    } catch (error) {
      throw error;
    }
  });
});