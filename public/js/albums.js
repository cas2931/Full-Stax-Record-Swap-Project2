$(document).ready(function() {
    // Getting references to our form and inputs
    var albumForm = $("form.album");
    var titleInput = $("input.title-input");
    var artistInput = $("input.artist-input");  
    var reviewInput = $("input.review-input");

  
    // When the form is submitted, we validate there's an email and password entered
    albumForm.on("submit", function(event) {
      event.preventDefault();
      var albumData = {
        title: titleInput.val().trim(),
        artist: artistInput.val().trim(), 
        review: reviewInput.val().trim(), 
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("/user");
          //response.redirect(path.join(__dirname, "../views/user.handlebars"));
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });
  