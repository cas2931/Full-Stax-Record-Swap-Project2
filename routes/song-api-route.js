var db = require("../models");

module.exports = function(app) {
   // PUT route for updating albums
   app.put("/api/songs", function(req, res) {
    db.Song.update(
      //req.body,
      {
        where: {
          //id: req.body.id 
          listened: '1'
        }
      }).then(function(dbSong) {
      res.json(dbSong);
    });
  });
 // DELETE route for deleting albums 
 app.delete("/api/songs/:id", function(req, res) {
    db.Album.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAlbum) {
      res.json(dbSong);
    });
  });
 // POST route for saving a new album
 app.post("/api/songs", function(req, res) {
    db.Album.create(req.body).then(function(dbAlbum) {
      res.json(dbSongs);
    });
  });
}