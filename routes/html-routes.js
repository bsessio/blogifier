var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/register.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/index.html"));
  });

  app.get("/post", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/post.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/login.html"));
  });
};

