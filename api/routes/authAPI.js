const axios = require("axios");
const express = require("express");
const router = express.Router();

let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

if (!isSignup) {
  url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
}

router.get("/", function(req, res) {
  axios
    .post(url, authData)
    .then(response => {
      const expirationDate = new Date(
        new Date().getTime() + response.data.expiresIn * 1000
      );
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("userId", response.data.localId);
      dispatch(
        authActions.authSuccess(response.data.idToken, response.data.localId)
      );
      dispatch(checkAuthTimeout(response.data.expiresIn));
    })
    .catch(err => {
      dispatch(authActions.authFail(err.response.data.error));
    });
});

module.exports = router;
