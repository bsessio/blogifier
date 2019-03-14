if (!localStorage.getItem("user")) {
  $(".authname").text("Guest");
} else {
  $(".authname").text(localStorage.getItem("user"));
}

$("#search_feed").on("submit", function(event) {
  event.preventDefault();

  let search = $(".searchbar")
    .val()
    .trim();
  let category = $(".searchSelect option:selected ").val();
  let directory = "/search/" + category + "/" + search;

  window.location.href = directory;
});

$(".login").on("click", function(event) {
  if (!localStorage.getItem("user")) {
    window.location.href = "/login";
  }
  else {
    $.ajax("/auth/logout", {
      type: "GET"
    })
    .then(function(){
      localStorage.removeItem("user");
      window.location.href = "/"
    });
  }
})
