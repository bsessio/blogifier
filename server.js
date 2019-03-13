const express = require("express");
var passport=require("passport");
var session=require("express-session")
var cookieParser=require('cookie-parser')
var db=require("./models");
const PORT = process.env.PORT || 8080;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret:"secretSauce",
  saveUninitialized:false,
  resave:false
}))
app.use(passport.initialize())
app.use(passport.session());


// Import routes and give the server access to them.
require("./routes/post-api-routes")(app);
require("./routes/user-api-routes")(app);
require("./routes/html-routes")(app);
const passportRote = require("./routes/auth")(passport);
require("./passport")(passport);

app.use('/auth', passportRote)
// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
 });
