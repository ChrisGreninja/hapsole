const express = require("express");
const app = express();
const https = require("https");
app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/public/js/index.js", function (req, res) {
  res.sendFile(__dirname + "/public/js/index.js");
});

app.get("/public/Styles/Style.css", function (req, res) {
  res.sendFile(__dirname + "/public/Styles/Style.css");
});

app.get("/public/Styles/Queries.css", function (req, res) {
  res.sendFile(__dirname + "/public/Styles/Style.css");
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
