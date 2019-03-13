// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    //get all the posts
    app.get("/api/posts/", function(req, res) {
      var query = {};
      if (req.query.author_id) {
        query.AuthorId = req.query.author_id;
      }       
      db.Post.findAll({
        include: [{model:db.User}],
        where: query
      })
      .then(function(dbPost) {
            res.json(dbPost);
      });
  });
    //api route for saving a new post.
    app.post("/api/posts", function(req, res) {
        console.log(req.body);
        db.Post.create({
          name: req.body.name,
<<<<<<< HEAD
          location: req.body.locale,
          blogPost: req.body.blog
=======
          UserID: req.body.UserID,
          location: req.body.location,
          blogPost: req.body.blogPost
>>>>>>> 53cc8dfbeef14db82476ef6a98f26c2705a1425b
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
    
};