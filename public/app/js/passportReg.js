// =====================
//     AHSOKA LIVES
// =====================

// When the page loads...
$(document).ready(function() {
  // Define some variables for various html elements
  let username = $("#name");
  let locale = $("#address");
  let password = $("#password");
  let cPassword = $("#confirmPassword");
  // On click of the registration button...
  $("#register").on("submit", function(event) {
    // Stop the form from submitting properly
    event.preventDefault();
    // If any field is blank...
    if (
      !username.val().trim() ||
      !locale.val().trim() ||
      !password.val().trim()
    ) {
      // ...we bail out.
      return;
    }
    // If the password doesn't match the confirm-password field...
    if (password.val().trim() != cPassword.val().trim()) {
      $(".errorAlert").empty();
      $(".errorAlert").append(
        "<p style='text-align: center; color: red'>These passwords do not match.</p>"
      );
      // ...we bail out.
      return;
    }
    // Otherwise, we package up this new variable with the stuff we need for the user
    let newRegister = {
      username: username.val().trim(),
      area: locale.val().trim(),
      password: password.val().trim()
    };
    // And send it on the ajax Post method.
    $.ajax("/auth/register", {
      type: "POST",
      data: newRegister
    })
      // Then we check for errors
      .then(function(err) {
        // If we get an error back from registration, which took a while to figure out how to do...
        if (err === "Server Error") {
          // ...we notify the user in the error alert div by clearing and appending.
            $(".errorAlert").empty();
            $(".errorAlert").append(
              "<p style='text-align: center; color: red'>Username already exists.</p>"
            );
        }
        // Otherwise, we send them to the login page with their shiny new credentials.
        else {
        window.location.href = "/login"; 
        }
      })
  });
});
