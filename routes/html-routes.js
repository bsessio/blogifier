var path = require("path");
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/register.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/index.html"));
  });

  app.get("/post", ensureLoggedIn(), function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/post.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/login.html"));
  });

  app.get("/search/:category/:name", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/search.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/profile.html"));
  });

  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
