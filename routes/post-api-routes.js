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
          location: req.body.location,
          blogPost: req.body.blogPost
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
    

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};