$(document).ready(function() {
  let username = $("#name");
  let locale = $("#address");
  let password = $("#password");
  let cPassword = $("#confirmPassword");

  $("#register").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    $(".errorAlert").empty();
    if (
      !username.val().trim() ||
      !locale.val().trim() ||
      !password.val().trim()
    ) {
      return;
    }
    if (password.val().trim() != cPassword.val().trim()) {
      $(".errorAlert").append(
        "<p style='text-align: center; color: red'>These passwords do not match.</p>"
      );
      return;
    }

    let newRegister = {
      username: username.val().trim(),
      area: locale.val().trim(),
      password: password.val().trim()
    };

    console.log(newRegister);
    $.ajax("/auth/register", {
      type: "POST",
      data: newRegister
    }).then(function() {
      console.log("Created a new registration for", username);
      // Reload the page to get the updated list
      window.location.href = "/login";
    });
  });
});
