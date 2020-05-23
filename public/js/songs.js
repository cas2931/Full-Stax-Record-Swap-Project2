$(document).ready(function() {
    // Getting references to our form and inputs
    var songForm = $("form.song");
    var titleSong = $("input.title-song");
    var artistSong = $("input.artist-song");  
    var reviewSong = $("input.review-song"); 
    //var songListenForm = $("form.songUnlistened"); 

  
    // When the form is submitted, we validate there's an email and password entered
    songForm.on("submit", function(event) {
      event.preventDefault();
      var songData = {
        title: titleSong.val().trim(),
        artist: artistSong.val().trim(), 
        review: reviewSong.val().trim(), 
      };
  
      if (!songData.title || !songData.artist) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      enterSong(songData.title, songData.artist, songData.review);
      titleSong.val("");
      artistSong.val(""); 
      reviewSong.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function enterSong(title, artist, review) {
      $.post("/api/songs", {
        title: title,
        artist: artist,
        review: review, 
        UserId: localStorage.getItem("UserId")
      })
        .then(function(response) {
            console.log(response);
          window.location.reload();
          //response.redirect(path.join(__dirname, "../views/user.handlebars"));
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }

  }); 
 
  // songListenForm.on("submit", function(event) {
  // event.preventDefault();  

  // var songStatus = {
  // listened: req.body.listened 
  // }; 

  // listenSong(songStatus.listened);

  // function listenSong () {
  //   $.put("/api/songs", {
  //     listened: '1',
  //     id: $(this).attr("data-id")
  //   })
  //     .then(function(response) {
  //         console.log(response);
  //       window.location.reload();
  //       //response.redirect(path.join(__dirname, "../views/user.handlebars"));
  //       // If there's an error, log the error
  //     })
  //     .catch(function(err) {
  //       console.log(err);
  //     }) 
  //   });  

