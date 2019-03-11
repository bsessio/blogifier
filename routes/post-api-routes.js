// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    //get all the posts
    app.get("/api/posts/", function(req, res) {
        db.Post.findAll({})
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
    //api route for saving a new post.
    app.post("/api/posts", function(req, res) {
        console.log(req.body);
        db.Post.create({
          name: req.body.name,
          location: req.body.location,
          blogPost: req.body.blogPost
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
    
};