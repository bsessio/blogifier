// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    //get all the posts
    app.get("/api/posts/", function(req, res) {
      db.Post.findAll().then(function(data){
        res.send(data)
      })
  });
    //api route for saving a new post.
    app.post("/api/posts", function(req, res) {
        console.log(req.body);
        console.log("user",req.user)
        db.Post.create({
          name: req.user.username,
          location:req.user.area,
          blogPost: req.body.blogPost
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
    
};