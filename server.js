// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session()); 

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");  

//index.handlebars
app.get('/', function (req, res) {
  res.render('index');   
  //res.render(path.join(__dirname, "../views/index.handlebars"));
});

//user.handlebars
app.get('/user/:id', async function (req, res) {

  const albums = await db.Album.findAll({raw: true, where: {UserId: req.params.id}})
  console.log(albums); 

  const songs = await db.Song.findAll({raw: true, where: {UserId: req.params.id}}) 
  console.log(songs);
  
  res.render('user', {albums}, {songs});  
  //res.render(path.join(__dirname, "../views/user.handlebars"));
}); 


// Requiring our routes
//require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app); 
require("./routes/album-api-route.js")(app);
require("./routes/song-api-route.js")(app); 

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }); 
});
