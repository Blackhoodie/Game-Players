const PlayerModel = require('../../src/model/playerModel');

describe('PlayerModel', () => {
    test('should create a player', () => {
      // Create fake db
      const fakeDb = {
        all: jest.fn(),
        run: jest.fn()
      };
  
      // Create player object using fake db
      const player = new PlayerModel(fakeDb);
  
      // Test data
      const playerData = {
        login: 'testplayer',
        password: 'testpassword',
        balance: { level: 5, currencyBalance: 100.0 },
        countryCode: 'US'
      };
  
      // Add new player using fake db and test data
      player.addPlayer(playerData);
  
      expect(playerData.login).toBe('testplayer');
      expect(playerData.balance.level).toBe(5);
      expect(playerData.balance.currencyBalance).toBe(100.0);
      expect(playerData.countryCode).toBe('US');
  
      expect(fakeDb.run).toHaveBeenCalled();
    });
  
  });