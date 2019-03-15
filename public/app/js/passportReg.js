$(document).ready(function() {
  let username = $("#name");
  let locale = $("#address");
  let password = $("#password");
  let cPassword = $("#confirmPassword");
  $("#register").on("submit", function(event) {
    event.preventDefault();
    if (
      !username.val().trim() ||
      !locale.val().trim() ||
      !password.val().trim()
    ) {
      return;
    }
    if (password.val().trim() != cPassword.val().trim()) {
      $(".errorAlert").empty();
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
    $.ajax("/auth/register", {
      type: "POST",
      data: newRegister
    })
      .then(function(err) {
        if (err === "Server Error") {
            $(".errorAlert").empty();
            $(".errorAlert").append(
              "<p style='text-align: center; color: red'>Username already exists.</p>"
            );
        }
        else {
        window.location.href = "/login"; 
        }
      })
  });
});
