var db = require("../models");

module.exports = function(app){
   app.get("/api/users", function(req, res){
       db.User.findAll ({
           include: [{model:db.Post}]
       })
       .then(function(dbUser){
           res.json(dbUser);
       });
   });

}