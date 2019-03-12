// $(document).ready(function() {
//   // Getting references to the name input and author container, as well as the table body
//   let name = $("#name");
//   let password = $("#password");
//   let locatioon = $("#address");

//   $(document).on("click", button, function() {
//     console.log(this + " button clicked.");
//   });

//   $(document).on("submit", "#register", registration);

//   $(document).on("submit", "#login", login);

// //   $(document).on("submit", "#blogPost", blogPost);

//       let name = $("#name");
//       let locale = $("#address");
//       let password = $("#password");
//       let blogPost = $("#blogPost");

//   $("#postForm").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();
//     if (!name.val().trim() || !locale.val().trim() || !blogPost.val().trim()) {
//         return;
//       }
//     // if (!name.val().trim() != 'something from Passport' || !password.val().trim() != 'something from Passport' ) {
//     //     return;
//     // } 
//     // Send the POST request.

//     let newBlogPost = {
//         name: name.val().trim(),
//         locale: locale.val().trim(),
//         blog: blogPost.val().trim()
//     };

//     $.ajax("/api/posts/", {
//       type: "POST",
//       data: 
//     }).then(
//       function() {
//         console.log("Created a new post from", name);
//         // Reload the page to get the updated list
//         window.location.href = "index.html";
//       }
//     );
//   });

//   function registration(event) {
//     event.preventDefault();
//     if ($("#confirmPassword") === password) {
//       return event;
//     } else {
//       // alert them that these passwords didn't match.
//     }
//   }

//   function login(event) {
//     event.preventDefault();
//     return event;
//   }

//   function blogFeed(event) {
//     event.preventDefault();
//     let blogAuthor = "???",
//       blogAuthorLocation = "???",
//       blogBody = $("blog");

//     $(".newsFeed").prepend(
//       "<div class=`blogPost`>" +
//         "<div class=`blogHeader`>" +
//         "<div class=`blogAuthor`>" +
//         blogAuthor +
//         "</div>" +
//         "<div class=`blogAuthorLocation`>" +
//         blogAuthorLocation +
//         "</div>" +
//         "</div>" +
//         "<div class=`blogBody`>" +
//         blogBody +
//         "</div>" +
//     "</div>"
//     );
//   }
// });
