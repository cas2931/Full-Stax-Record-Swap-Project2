var db = require("../models");

module.exports = function(app) { 
     // Get route for getting all of the songs
//   app.get("/api/songs", function(req, res) {
//     var query = {};
//     if (req.query.author_id) {
//       query.AuthorId = req.query.author_id;
//     }
//     db.Post.findAll({
//       where: query
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

  // Get route for retrieving a single song
  app.get("/api/songs/:id", function(req, res) {
    db.Song.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbSong) {
      console.log(dbSong);
      res.json(dbSong);
    });
  });

   // PUT route for updating songs
   app.put("/api/songs", function(req, res) {
    db.Song.update(
      req.body.listened, 
      {
        where: { 
          listened: '1'
        }
      }).then(function(dbSong) {
      res.json(dbSong);
    });
  }); 

 // DELETE route for deleting songs 
 app.delete("/api/songs/:id", function(req, res) {
    db.Song.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSong) {
      res.json(dbSong);
    });
  }); 

 // POST route for saving a new song
 app.post("/api/songs", function(req, res) {
    db.Song.create(req.body).then(function(dbSong) {
      res.json(dbSong);
    });
  });
}