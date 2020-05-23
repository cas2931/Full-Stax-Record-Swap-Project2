$(document).ready(function() {
    // Getting references to our form and inputs
    var albumForm = $("form.album");
    var titleInput = $("input.title-input");
    var artistInput = $("input.artist-input");  
    var reviewInput = $("input.review-input"); 


    //var albumListenForm = $("form.albumUnlistened");

  
    // When the form is submitted, we validate there's an email and password entered
    albumForm.on("submit", function(event) {
      event.preventDefault();
      var albumData = {
        title: titleInput.val().trim(),
        artist: artistInput.val().trim(), 
        review: reviewInput.val().trim(), 
      };
  
      if (!albumData.title || !albumData.artist) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      enterAlbum(albumData.title, albumData.artist, albumData.review);
      titleInput.val("");
      artistInput.val(""); 
      reviewInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function enterAlbum(title, artist, review) {
      $.post("/api/albums", {
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
  

  // var albumListenForm = $("form.albumUnlistened");
  // albumListenForm.on("submit", function(event) {
  // event.preventDefault(); 
  // function listenAlbum() {
  //       $.put("/api/albums", {
  //         listened: '1',
  //         id: $(this).attr("data-id")
  //       })
  //         .then(function(response) {
  //             console.log(response);
  //           window.location.reload();
  //           //response.redirect(path.join(__dirname, "../views/user.handlebars"));
  //           // If there's an error, log the error
  //         })
  //         .catch(function(err) {
  //           console.log(err);
  //         });
  //     } 
  //   });

