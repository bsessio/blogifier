$(document).ready(function() {
  let blog = $("#blog");
  $("#postForm").on("submit", function(event) {
    event.preventDefault();
    let message = blog
      .val()
      .trim()
      .replace(/\n/g, "<br />");
    let newBlogPost = {
      blogPost: message
    };
    $.ajax("/api/posts/", {
      type: "POST",
      data: newBlogPost
    }).then(function() {
      window.location.href = "/";
    });
  });
});
