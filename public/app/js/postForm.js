// When the page loads...
$(document).ready(function() {
  // Define an html element we'll use later
  let blog = $("#blog");
  // On click of the post submit button...
  $("#postForm").on("submit", function(event) {
    // Fail to do the default button thing.
    event.preventDefault();
    // Define 'message' as a simplified version of blog above
    let message = blog
      .val()
      .trim()
      .replace(/\n/g, "<br />");
    // Then package up an object to send.
    let newBlogPost = {
      blogPost: message
    };
    // Send the object to a post Ajax request to add it to MySQL
    $.ajax("/api/posts/", {
      type: "POST",
      data: newBlogPost
      // Send them back to the index page to see their beautiful new post.
    }).then(function() {
      window.location.href = "/";
    });
  });
});
