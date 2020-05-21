var db = require("../models");  

module.exports = function(app) { 
     // Get route for getting all of the albums
//   app.get("/api/posts", function(req, res) {
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

  // Get route for retrieving a single album
  app.get("/api/albums/:id", function(req, res) {
    db.Album.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAlbum) {
      console.log(dbAlbum);
      res.json(dbAlbum);
    });
  });

    // PUT route for updating albums
    app.put("/api/albums", function(req, res) {
        db.Album.update(
          req.body.listened,
          {
            where: {
              //id: req.body.id 
              listened: '1'
            }
          }).then(function(dbAlbum) {
          res.json(dbAlbum);
        });
      });

     // DELETE route for deleting albums 
     app.delete("/api/albums/:id", function(req, res) {
        db.Album.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbAlbum) {
          res.json(dbAlbum);
        });
      });
      
     // POST route for saving a new album
     app.post("/api/albums", function(req, res) {
        db.Album.create(req.body).then(function(dbAlbum) {
          res.json(dbAlbum);
        });
      });
    }
