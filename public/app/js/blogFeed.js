// When everything loads
$(document).ready(function() {
  // Define some ancestral variables
      let blogAuthor = '',
            blogAuthorLocation = '',
            blogBody = '',
            blogDate = '',
            $newsFeed = $(".newsFeed"), 
            dbPost = [];
          // Initialize blogFeed, which pulls the request for data.
          blogFeed();
          // define blogPosts for blogFeed, which will populate our page
          function blogPosts() {
            // Empties the div.
            $newsFeed.empty();
            // Runs a for loop to initialize and prepend each post 
            for (var i = 0; i < dbPost.length; i++) {
              // variables defined or redefined for the feed.
              // grabs the date
              let MySQL_date = dbPost[i].createdAt;
              blogAuthor = dbPost[i].name,
              blogAuthorLocation = dbPost[i].location,
              blogBody = dbPost[i].blogPost,
              // puts the date into a prettier moment.js format.
              blogDate = moment(MySQL_date, "YYYY-MM-DD").format('ll');
              // Lays out the code to push to the page.
              $newsFeed.prepend("<div class='blogPost'>" +
              "<div class='blogHeader'>" +
              "<div class='blogAuthor'>" +
              blogAuthor +
              "</div>" +
              "<div class='blogDate'>"+
              blogDate+
              "</div>" +
              "<div class='blogAuthorLocation'>" +
              blogAuthorLocation +
              "</div>" +
              "</div>" +
              "<div class='blogBody'>" +
              blogBody +
              "</div>" +
          "</div>")
            }      
          }
          // blogFeed function
          function blogFeed() {
            // makes call for mySQL data
            $.get("/api/posts", function(data) {
              dbPost = data;
              // runs blogPosts to feed the for loop of entries.
              blogPosts();
            });
          }
          // meme description: https://img.memecdn.com/zoiks-lets-get-out-of-here_o_157156.jpg
         return;
     })