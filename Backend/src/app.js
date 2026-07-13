//MAin task of app.js is to create an instance of server and to use middlewares and to use whatever routes that we create will be used here in app.js. This is the main entry point of our application.
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());
const authRouter = require("./routes/auth.routes")
app.use("/api/auth", authRouter)
module.exports = app