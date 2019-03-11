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

//   $("#postForm").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();
//       let name = $("#name").val().trim();
//       let locale = $("#address").val().trim();
//       let password = $("#password").val().trim();
//       let blogPost = message;

//     // Send the POST request.
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

//     $(".blogpost").prepend(
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
