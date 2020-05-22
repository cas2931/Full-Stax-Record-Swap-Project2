$(document).ready(function() {
    // Getting references to our form and inputs
    var songForm = $("form.song");
    var titleInput = $("input.title-input");
    var artistInput = $("input.artist-input");  
    var reviewInput = $("input.review-input");

  
    // When the form is submitted, we validate there's an email and password entered
    songForm.on("submit", function(event) {
      event.preventDefault();
      var songData = {
        title: titleInput.val().trim(),
        artist: artistInput.val().trim(), 
        review: reviewInput.val().trim(), 
      };
  
      if (!songData.title || !songData.artist) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      enterSong(songData.title, songData.artist, songData.review);
      titleInput.val("");
      artistInput.val(""); 
      reviewInput.val("");
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
  