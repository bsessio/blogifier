// Require and localize elements.
var express = require("express");
var router = express();
var db = require("../models");
var User = db.User;
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

// Export passport
module.exports = function(passport) {
  // A test function we should probably delete.
  router.get("/test", ensureLoggedIn(), function(req, res) {
    res.json(req.user);
  });

  // When going to Register actions on the Registration form...
  router.post("/register", function(req, res) {
    // Define some ancestral variables
    var username = req.body.username,
      password = req.body.password,
      area = req.body.area;
    // Identify the user you are registering.
    User.findOne({ where: { username: username } }).then(function(err, data) {
      // Check for errors or redundant data (taken account name, usually).
      if (err || data) {
        // Send something we can identify to show the user elsewhere.
        res.json("Server Error");
        } else {
      // If no errors, create a new user object...
          User.create({
            username: username,
            password: User.hashPassword(password),
            area: area
          }).then(function(data) {
            // ...and send it.
            res.json(data);
          });
        }
    });
  });

  // On a log-in form submission...
  router.post("/login", (req, res, next) => {
    // Check for errors of like 50 kinds.
  passport.authenticate('local', (err, user, info) => {
    if (err) {
       return next(err); }
    if (user) {
      req.login(user, (err) => {
        // If errors aren't found when logging in...
        if (err) { 
          return next(err);}
          // Complete a log in handshake.
        res.json({ success: req.user ? "Yes" : "No", user: req.user });
      });
    } else {
        // If errors ARE found, send an error we can interpret for the front end.
      res.json("Server Error");
    }
  })(req, res, next);
  });
  
  // If you try to log out...
  router.get('/logout',function(req, res) { 
    // ...well, log you out.
    const old_user=req.user;
    req.logout();
    res.json({success:(req.user? "No":"Yes"), user:req.user, "old_user":old_user});
});

  // Meme: https://media1.tenor.com/images/a890ffa123b1c2c6e2c069a3c9da20ea/tenor.gif?itemid=4780633
  return router;
};
