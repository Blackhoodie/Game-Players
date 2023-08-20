class PlayerModel {
  constructor(db) {
    this.db = db;
  }

  getAllPlayers(callback) {
    this.db.all('SELECT id, login, password, balance_level, balance_currency, countryCode FROM players', callback);
  }

  addPlayer(playerData, callback) {
    const insertQuery = 'INSERT INTO players (login, password, balance_level, balance_currency, countryCode) VALUES (?, ?, ?, ?, ?)';
    this.db.run(
      insertQuery,
      [playerData.login, playerData.password, playerData.balance.level, playerData.balance.currencyBalance, playerData.countryCode],
      callback
    );
    console.log("New player was added with following data: \n\
    Login: " + playerData.login + "\n\
    Password: " + playerData.password + "\n\
    Balance level: " + playerData.balance.level + "\n\
    Balance currency: " + playerData.balance.currencyBalance + "\n\
    Country code: " + playerData.countryCode + "\
    ");
  }
}

module.exports = PlayerModel;