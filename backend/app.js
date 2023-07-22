const express = require("express");
// const Errorhandler = require("./utils/ErrorHandler"); this is wrong and throwing error
const Errorhandler = require("./middlewares/Error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", // These are done for storing cookies
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads")); // Its Means Any one can access this directory
app.use(bodyParser.urlencoded({ extended: true }));

// config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./config/.env",
  });
}
// Import routes
const user = require("./controller/user");
app.use("/api/v2/user", user);
// error Handling
app.use(Errorhandler);
module.exports = app;
