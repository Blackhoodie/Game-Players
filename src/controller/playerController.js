class PlayerController {
    constructor(playerModel) {
      this.playerModel = playerModel;
    }
  
    getAllPlayers(req, res) {
      console.log("Request to getAllPlayers came from client");
      this.playerModel.getAllPlayers((err, rows) => {
        if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.status(200).json(rows);
        }
      });
    }
  
    addPlayer(req, res) {
      console.log("Request to addPlayer came from client");
      const playerData = req.body;

      this.playerModel.addPlayer(playerData, (err) => {
        if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.status(201).json({ message: 'Player data inserted' });
        }
      });
    }
  }
  
  module.exports = PlayerController;