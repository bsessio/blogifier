$(document).ready(function() {
      let username = $("#name");
      let password = $("#password");

  $("#login").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
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
        localStorage.setItem("user",username.val().trim())
        $(".authname").text(res.username)
        // Reload the page to get the updated list
        window.location.href = "/";
      }
    );
  });
});