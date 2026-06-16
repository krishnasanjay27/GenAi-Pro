//MAin task of app.js is to create an instance of server and to use middlewares and to use whatever routes that we create will be used here in app.js. This is the main entry point of our application.
const express = require("express");
const app = express();
app.use(express.json());

module.exports = app