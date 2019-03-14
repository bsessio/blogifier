if (!localStorage.getItem("user")) {
  $(".authname").text("Guest");
} else {
  console.log(localStorage.getItem("user"));
  $(".authname").text(localStorage.getItem("user"));
}

$("#search_feed").on("submit", function(event) {
  event.preventDefault();

  let search = $(".searchbar")
    .val()
    .trim();
  let category = $(".searchSelect option:selected ").val();
  let directory = "/search/" + category + "/" + search;
  console.log(directory);

  window.location.href = directory;
});

// if (window.location === path) {
//   console.log("I am at "+path);
//   //     // Our initial dbPost array
//   var dbPost = [];
//   //     // Getting dbPost from database when page loads
//           searchFeed();
//           let blogAuthor = '',
//           blogAuthorLocation = '',
//           blogBody = '';
//     var $searchFeed = $(".search");
//       //     // This function resets the dbPost displayed with new dbPost from the database
//           function blogPosts() {
//             $searchFeed.empty();
//             for (var i = 0; i < dbPost.length; i++) {
//               blogAuthor = dbPost[i].name;
//               blogAuthorLocation = dbPost[i].location;
//               blogBody = dbPost[i].blogPost;
//               $searchFeed.prepend("<div class='blogPost'>" +
//               "<div class='blogHeader'>" +
//               "<div class='blogAuthor'>" +
//               blogAuthor +
//               "</div>" +
//               "<div class='blogAuthorLocation'>" +
//               blogAuthorLocation +
//               "</div>" +
//               "</div>" +
//               "<div class='blogBody'>" +
//               blogBody +
//               "</div>" +
//           "</div>")
//             }
//           }

//       //     // This function grabs dbPost from the database and updates the view
//           function searchFeed(req, res) {
//             $.get("/api/posts/:search/:category", function(data) {
//               dbPost = data;
//               blogPosts();
//             });
//           }

//          return dbPost[0];
// }
