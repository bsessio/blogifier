$(document).ready(function() {
  let username = $("#name");
  let password = $("#password");
<<<<<<< HEAD

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
    console.log(res)
    console.log("Log In attempt for", username);
    localStorage.setItem("user",res.username)
    $(".authname").text()
    // Reload the page to get the updated list
    window.location.href = "/";
  }
);
});
=======
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
>>>>>>> origin
});