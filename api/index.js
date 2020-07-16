const functions = require("firebase-functions");
const app = require("./app");
const api = functions.https.onRequest(app);

module.exports = { api };
