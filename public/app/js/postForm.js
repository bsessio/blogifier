$(document).ready(function() {
      let name = $("#name");
      let locale = $("#address");
    //   let password = $("#password");
      let blog = $("#blog");

  $("#postForm").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if (!name.val().trim() || !locale.val().trim() || !blog.val().trim()) {
        return;
      }
    // if (!name.val().trim() != 'something from Passport' || !password.val().trim() != 'something from Passport' ) {
    //     return;
    // } 
    // Send the POST request.
    let message = blog.val().trim().replace(/\n/g, "<br />");
    let newBlogPost = {
        name: name.val().trim(),
        locale: locale.val().trim(),
        blog: message
    };

    console.log(newBlogPost);

    $.ajax("/api/posts/", {
      type: "POST",
      data: newBlogPost
    }).then(
      function() {
        console.log("Created a new post from", name);
        // Reload the page to get the updated list
        window.location.href = "/";
      }
    );
  });
});