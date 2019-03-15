// When the page loads
$(document).ready(function() {
  // Define some ancestral elements we'll use later
  let username = $("#name");
  let password = $("#password");

  // On click of the login button
  $("#login").on("submit", function(event) {
    // Stop the form submission default
    event.preventDefault();
    // if either field is empty, do nothing
    if (!username.val().trim() || !password.val().trim()) {
      return;
    }
    // define the Log In variable we'll be sending
    let login = {
      username: username.val().trim(),
      password: password.val().trim()
    };
    // Send the Log In variable to the post path for login
    $.ajax("/auth/login", {
      type: "POST",
      data: login
    }).then(function(res) {
      // If we get a log in error we spent TOO LONG sending ourselves...
      if (res === "Server Error") {
        // Empty out and write an error alert for the user.
        $(".errorAlert").empty();
        $(".errorAlert").append(
          "<p style='text-align: center; color: red'>Incorrect or invalid username or password.</p>"
        );
      // If we don't, go ahead and set the localStorage with that name, and go to index.
      } else {
        localStorage.setItem("user", username.val().trim());
        $(".authname").text(res.username);
        window.location.href = "/";
      }
    });
  });
});