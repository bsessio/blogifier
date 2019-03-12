// require("dotenv").config()
const express = require("express");
var passport=require("passport");
var session=require("express-session")
var cookieParser=require('cookie-parser')
const PORT = process.env.PORT || 8080;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize())
app.use(passport.session())
app.use(require('cookie-parser')());
app.use(session({
  secret:"secretSauce",
  saveUninitialized:false,
  resave:false
}))

// Import routes and give the server access to them.
require("./routes/post-api-routes")(app);
require("./routes/user-api-routes")(app);
require("./routes/html-routes")(app);
require("./routes/auth")(passport);
require("./passport")(passport);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
