// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var blogPost = sequelize.define("book", {
  name: Sequelize.STRING,
password: Sequelize.STRING,
  blogPost: Sequelize.TEXT,
  id: Sequelize.INTEGER
});

// Syncs with DB
blogPost.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = blogPost;
