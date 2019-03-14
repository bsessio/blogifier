$(document).ready(function() {
      let blogAuthor = '',
            blogAuthorLocation = '',
            blogBody = '',
            blogDate = '',
            $newsFeed = $(".newsFeed"), 
            dbPost = [];
          blogFeed();
          function blogPosts() {
            $newsFeed.empty();
            for (var i = 0; i < dbPost.length; i++) {
              let MySQL_date = dbPost[i].createdAt;
              blogAuthor = dbPost[i].name,
              blogAuthorLocation = dbPost[i].location,
              blogBody = dbPost[i].blogPost,
              blogDate = moment(MySQL_date, "YYYY-MM-DD mm:ss.sssZ");
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
          function blogFeed() {
            $.get("/api/posts", function(data) {
              dbPost = data;
              blogPosts();
            });
          }
         return;
     })
