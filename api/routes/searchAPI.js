const axios = require("axios");
const express = require("express");
const router = express.Router();

const API_KEY = process.env.REACT_APP_CHARITY_API_KEY;
const baseUrl =
  "https://cors-anywhere.herokuapp.com/http://data.orghunter.com/v1/charitysearch?user_key=" +
  API_KEY +
  "&searchTerm=";

router.get("/", function(req, res) {
  console.log(searchTerm);
  console.log(req);
  axios
    .get(baseUrl + searchTerm.replace(" ", "%20"))
    .then((response, error) => {
      if (!error && response.status === 200) {
        res.send(response.data);
      } else {
        res.send(error);
      }
    });
});

module.exports = router;
