// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  //get all the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({}).then(function(data) {
      res.send(data);
    });
  });

  app.get("/api/posts/:category/:search", function(req, res) {
    search = req.params.search;
    category = req.params.category;

    if (category == "name") {
      db.Post.findAll({
        where: { name: search }
      }).then(function(data) {
        res.send(data);
      });
    }
    if (category == "location") {
      db.Post.findAll({
        where: { location: search }
      }).then(function(data) {
        res.send(data);
      });
    }
  });

  //api route for saving a new post.
  app.post("/api/posts", function(req, res) {
    db.Post.create({
      name: req.user.username,
      authorId:req.user.id,
      location: req.user.area,
      blogPost: req.body.blogPost
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  app.get("/api/profile",function(req,res){
    db.Post.findAll({where:{authorId:req.user.id}}).then(function(data){
      res.json(data)
    })
  })
  app.post("/api/delete",function(req,res){
    id=req.body.id
    db.Post.destroy({where:{id:id}}).then(function(data){
      res.json(data)
    })
  })

  app.post("/api/update/",function(req,res){
    var id= req.body.id,
    newbody=req.body.post
    db.Post.update({blogPost:newbody},{where:{id:id}}).then(function(data){
      res.json(data)
    })
  })
};
