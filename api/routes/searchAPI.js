const axios = require("axios");
const express = require("express");
const router = express.Router();

const baseUrl =
  "http://data.orghunter.com/v1/charitysearch?user_key=72bfc58bcc06ccc2eda85645e1ae0823&searchTerm=";

router.get("/", function(req, res) {
  axios
    .get(`${baseUrl}${req.query.searchTerm}`)
    .then(response => {
      if (
        response.status === 200 &&
        (!response || !response.data || !response.data.data)
      ) {
        alert("Something went wrong with an API call!");
      } else if (response.status === 403) {
        alert("Not Authorized API Call");
      } else if (response.status === 404) {
        alert("Results not found");
      } else if (response.stats === 500) {
        alert("Server Error Occurred");
      } else {
        res.send(response.data.data);
      }
    })
    .catch(error => res.send(error));
});

module.exports = router;
