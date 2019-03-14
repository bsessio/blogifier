$(document).ready(function() {
      let blogAuthor = '',
            blogAuthorLocation = '',
            blogBody = '',
            blogDate = '',
            blogID = '',
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
              blogID = dbPost[i].id;
              blogDate = moment(MySQL_date, "YYYY-MM-DD").format('ll');
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
              "<div class='modify'><p>" +
              "<span class='edit newBlog' data-id="+
              blogID+
              ">Edit</span> | <span class='delete newBlog' data-id="+
              blogID+
              ">Delete</span>"
              +"</p></div>"+
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

$(".edit").on("click", function(){

});

$(".delete").on("click", function() {
  console.log("Sup");
  console.log($(this).data("id").val());
  // blogID = {
  //   id: $(this).data("id").val()
  // }
  // $.ajax("/api/delete", {
  //   type: "POST",
  //   data: blogID
  // }).then(function() {
  //   window.location.href = "/";
  // });
});