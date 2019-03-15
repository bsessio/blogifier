// If we don't have anything in localStorage under User...
if (!localStorage.getItem("user")) {
  // ...write the name 'Guest' in the top left sticky header thingy.
  $(".authname").text("Guest");
// But if we DO have something in there...
} else {
  // ...write that there instead.
  $(".authname").text(localStorage.getItem("user"));
}
// If you click search feed, we are going to do stuff.
$("#search_feed").on("submit", function(event) {
  // Fail any button mechanism default
  event.preventDefault();

  // We grab the words from the searchbar...
  let search = $(".searchbar")
    .val()
    .trim();
  // Add the words from the category...
  let category = $(".searchSelect option:selected ").val();
  // And combine them into directory, to create an HTML route...
  let directory = "/search/" + category + "/" + search;

  // ...and send you to that route! You'll see more of this in the sequel, searchPage.js!
  window.location.href = directory;
});

// If you click 'login'...
$(".login").on("click", function(event) {
  // If you currently have nothing in the localStorage for your name...
  if (!localStorage.getItem("user")) {
    // Send you for a log in!
    window.location.href = "/login";
  }
  // But if you do have anything...
  else {
    // Log you out (that's this ajax request)
    $.ajax("/auth/logout", {
      type: "GET"
    })
    // And then remove the localStorage entry and send you to the index.
    .then(function(){
      localStorage.removeItem("user");
      window.location.href = "/"
    });
  }
})
