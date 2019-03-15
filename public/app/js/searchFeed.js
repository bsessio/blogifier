<<<<<<< HEAD
$(document).ready(function() {
    if($(".authname").val()==="Guest"){
        $(".authname").text(localStorage.getItem("user"))
    }
    else{
        console.log("logged in already")
    }
// //   // Getting references to the name input and author container, as well as the table body
//     let blogAuthor = '',
//           blogAuthorLocation = '',
//           blogBody = '';
//     var $searchFeed = $(".search"); 

// //     // Our initial dbPost array
//         var dbPost = [];
// //     // Getting dbPost from database when page loads
//         searchFeed();
            
//     //     // This function resets the dbPost displayed with new dbPost from the database
//         function blogPosts() {
//           $searchFeed.empty();
//           for (var i = 0; i < dbPost.length; i++) {
//             blogAuthor = dbPost[i].name;
//             blogAuthorLocation = dbPost[i].location;
//             blogBody = dbPost[i].blogPost;  
//             $searchFeed.prepend("<div class='blogPost'>" +
//             "<div class='blogHeader'>" +
//             "<div class='blogAuthor'>" +
//             blogAuthor +
//             "</div>" +
//             "<div class='blogAuthorLocation'>" +
//             blogAuthorLocation +
//             "</div>" +
//             "</div>" +
//             "<div class='blogBody'>" +
//             blogBody +
//             "</div>" +
//         "</div>")
//           }      
//         }
      
//     //     // This function grabs dbPost from the database and updates the view
//         function searchFeed() {
//           $.get("/api/posts", function(data) {
//             dbPost = data;
//             console.log ("Results:", dbPost[0].name);
//             blogPosts();
//           });
//         }
   

//        return "Sup.";

//     //  blogPosts();
   })
=======
if (!localStorage.getItem("user")) {
  $(".authname").text("Guest");
} else {
  $(".authname").text(localStorage.getItem("user"));
}

$("#search_feed").on("submit", function(event) {
  event.preventDefault();

  let search = $(".searchbar")
    .val()
    .trim();
  let category = $(".searchSelect option:selected ").val();
  let directory = "/search/" + category + "/" + search;

  window.location.href = directory;
});

$(".login").on("click", function(event) {
  if (!localStorage.getItem("user")) {
    window.location.href = "/login";
  }
  else {
    $.ajax("/auth/logout", {
      type: "GET"
    })
    .then(function(){
      localStorage.removeItem("user");
      window.location.href = "/"
    });
  }
})
>>>>>>> origin
