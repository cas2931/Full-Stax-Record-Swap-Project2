$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#LIemail-input");
  var passwordInput = $("input#LIpassword-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
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
      .then(function(response) {
        localStorage.setItem("UserId",response.id)
        window.location.replace("/user/" + response.id);
        //response.redirect(path.join(__dirname, "../views/user.handlebars"));
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
