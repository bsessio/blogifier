$(document).ready(function() {
  let blogAuthor = "",
    blogAuthorLocation = "",
    blogBody = "",
    blogDate = "",
    $searchFeed = $(".searchFeed"),
    dbPost = [];
  blogFeed();
  function blogPosts() {
    $searchFeed.empty();
    for (var i = 0; i < dbPost.length; i++) {
      let MySQL_date = dbPost[i].createdAt;
      (blogAuthor = dbPost[i].name),
        (blogAuthorLocation = dbPost[i].location),
        (blogBody = dbPost[i].blogPost),
        (blogDate = moment(MySQL_date, "YYYY-MM-DD").format('ll'));
      $searchFeed.prepend(
        "<div class='blogPost'>" +
          "<div class='blogHeader'>" +
          "<div class='blogAuthor'>" +
          blogAuthor +
          "</div>" +
          "<div class='blogDate'>" +
          blogDate +
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

  function blogFeed() {
    let pathArray = window.location.pathname.split("/");
    let search = pathArray[3];
    let category = pathArray[2];
    let query = "/api/posts/" + category + "/" + search;

    $.get(query, function(data) {
      dbPost = data;

      blogPosts();
    });
  }
  return;
});
