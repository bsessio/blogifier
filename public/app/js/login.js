$(document).ready(function() {
      let username = $("#name");
      let password = $("#password");

  $("#apple").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("yoyo")
    if (!username.val().trim() || !password.val().trim()) {
        return;
    }

    let login = {
        username: username.val().trim(),
        password: password.val().trim()
    };

    console.log(login);

    $.ajax("/auth/login", {
      type: "POST",
      data: login
    }).then(
      function(res) {
        console.log(res)
        console.log("Log In attempt for", username);
        // Reload the page to get the updated list
        window.location.href = "/";
      }
    );
  });
});