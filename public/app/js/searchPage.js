// When the page loads...
$(document).ready(function() {
  // Define some variables, these should look familiar.
  let blogAuthor = "",
    blogAuthorLocation = "",
    blogBody = "",
    blogDate = "",
    // We did rename a thing tho.
    $searchFeed = $(".searchFeed"),
    dbPost = [];
  // Honestly, go look at the blogFeed page, this is pretty similar.
  blogFeed();
  // Yep, blogFeed here.
  function blogPosts() {
    // Oh, we renamed a thing though!
    $searchFeed.empty();
    // Otherwise, pretty identical.
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

  // This is still-- wait what's THAT?
  function blogFeed() {
    // We look at the current window and build an array of the words in it.
    let pathArray = window.location.pathname.split("/");
    // Grab search from the fourth (threeth) spot
    let search = pathArray[3];
    // Grab category from the third (twoth) spot
    let category = pathArray[2];
    // Create a query path from the above elements
    let query = "/api/posts/" + category + "/" + search;
    // Send the get request with a specific goal of a refined search of the MySQL table.
    $.get(query, function(data) {
      dbPost = data;
      // Oh, this is the same again.
      blogPosts();
    });
  }
  // Meme: https://media1.tenor.com/images/4e0a01d8fc8faef1aa1cbfbc3877426a/tenor.gif
  return;
});
