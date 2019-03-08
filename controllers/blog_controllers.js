// Sets up requires, and references models, and establishes router.
const express = require('express');
const models = require('../models');
const router = express.Router();

// Create all our routes and set up logic within those routes where required.

// Basic page, which loads all current burgers.
router.get("/", function(req, res) {
res.json
});


// Export routes for server.js to use.
module.exports = router;