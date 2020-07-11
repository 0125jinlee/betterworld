const functions = require("firebase-functions");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

exports.api = functions.https.onRequest(app);

module.exports = router;
