const axios = require("axios");
const express = require("express");
const router = express.Router();

const baseUrl =
  "http://data.orghunter.com/v1/charitysearch?user_key=72bfc58bcc06ccc2eda85645e1ae0823&searchTerm=";
const searchTerm = [];

const getSearchTerm = () => {
  axios
    .get("https://localhost:9000/searchAPI")
    .then(res => searchTerm.push(res.data))
    .catch(err => console.log(err.data));
};

router.get("/searchAPI", function(req, res) {
  const url = baseUrl + searchTerm[0];
  axios
    .get(url)
    .then(response => {
      if (
        response.status === 200 &&
        (!response || !response.data || !response.data.data)
      ) {
        alert("Something went wrong with an API call!");
      } else {
        res.send(response.data.data);
      }
    })
    .catch(error => res.send(error));
});

module.exports = router;
