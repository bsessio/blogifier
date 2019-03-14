$(document).ready(function() {
  //   // Getting references to the name input and author container, as well as the table body
  let blogAuthor = "",
    blogAuthorLocation = "",
    blogBody = "";
  var $searchFeed = $(".searchFeed");

  //     // Our initial dbPost array
  var dbPost = [];
  //     // Getting dbPost from database when page loads
  blogFeed();

  //     // This function resets the dbPost displayed with new dbPost from the database
  function blogPosts() {
    $searchFeed.empty();
    for (var i = 0; i < dbPost.length; i++) {
      blogAuthor = dbPost[i].name;
      blogAuthorLocation = dbPost[i].location;
      blogBody = dbPost[i].blogPost;
      $searchFeed.prepend(
        "<div class='blogPost'>" +
          "<div class='blogHeader'>" +
          "<div class='blogAuthor'>" +
          blogAuthor +
          "</div>" +
          "<div class='blogAuthorLocation'>" +
          blogAuthorLocation +
          "</div>" +
          "</div>" +
          "<div class='blogBody'>" +
          blogBody +
          "</div>" +
          "</div>"
      );
    }
  }

  //     // This function grabs dbPost from the database and updates the view
  function blogFeed() {
    let pathArray = window.location.pathname.split("/");
    let search = pathArray[3];
    let category = pathArray[2];
    let query = "/api/posts/" + category + "/" + search;
    console.log(pathArray);

    $.get(query, function(data) {
      dbPost = data;
      console.log(dbPost);

      blogPosts();
    });
  }

  return "Sup.";

  //  blogPosts();
});
