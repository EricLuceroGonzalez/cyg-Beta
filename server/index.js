// creating the server
const express = require("express");
const app = express();
// import CORS
const cors = require("cors");
// check computer environment port number
const port = process.env.PORT || 3001;

// // Require artist schema file to save it:
// const aComment = require("../models/CommentSchema");
const newForm = require('../Models/mailSchema')

var dotenv = require("dotenv");
dotenv.config();

// To parse a boydy to json
var bodyParser = require("body-parser");

// Add the routes
const routes = require("../routes/routes");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Use CORS
app.use(cors());

// Use router
app.use('/api', routes)

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

module.exports = { app, port };
