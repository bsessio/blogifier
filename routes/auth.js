var express = require("express");
var router = express();
var db = require("../models");
var User = db.User;
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

module.exports = function(passport) {
  router.get("/test", ensureLoggedIn(), function(req, res) {
    res.json(req.user);
  });

  router.post("/register", function(req, res) {
    var username = req.body.username,
      password = req.body.password,
      area = req.body.area;
    User.findOne({ where: { username: username } }).then(function(err, data) {
      if (err || data) {
        res.json("Server Error");
        } else {
          User.create({
            username: username,
            password: User.hashPassword(password),
            area: area
          }).then(function(data) {
            res.json(data);
          });
        }
    });
  });
  router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
       return next(err); }
    if (user) {
      req.login(user, (err) => {
        if (err) { 
          return next(err);}
        res.json({ success: req.user ? "Yes" : "No", user: req.user });
      });
    } else {

      res.json("Server Error");
      // res.status(401).send({ error: "There was an error logging in" });
    }
  })(req, res, next);
  });
  
  router.get('/logout',function(req, res) { 
    const old_user=req.user;
    req.logout();
    res.json({success:(req.user? "No":"Yes"), user:req.user, "old_user":old_user});
});

  return router;
};
