const functions = require("firebase-functions");
const admin = require("firebase-admin");
// const express = require("express");
// const bodyParser = require("body-parser");

admin.initializeApp(functions.config().firebase);

// Express Servers
const { app } = require("../app");

// HTTP Cloud Functions
const simple = functions.https.onRequest(app);
// const cors = functions.https.onRequest(corsServer);
// const cleanPath = functions.https.onRequest((request, response) => {
//   if (!request.path) {
//     request.url = `/${request.url}`; // Prepend '/' to keep query params if any
//   }

//   return cleanPathServer(request, response);
// });

module.exports = simple;
