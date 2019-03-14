$(document).ready(function() {
  let username = $("#name");
  let password = $("#password");
  // try {

  $("#login").on("submit", function(event) {
    event.preventDefault();
    if (!username.val().trim() || !password.val().trim()) {
      return;
    }
    let login = {
      username: username.val().trim(),
      password: password.val().trim()
    };
    $.ajax("/auth/login", {
      type: "POST",
      data: login
    }).then(function(res) {
      if (res === "Server Error") {
        $(".errorAlert").empty();
        $(".errorAlert").append(
          "<p style='text-align: center; color: red'>Incorrect or invalid username or password.</p>"
        );
      } else {
        localStorage.setItem("user", username.val().trim());
        $(".authname").text(res.username);
        window.location.href = "/";
      }
    });
  });
});