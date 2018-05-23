// Dependencies


var http = require("http");
var express = require("express");
var fs = require("fs");
var path = require ("path");
var bodyParser = require("body-parser");

// Set Express
var app = express();

// set port listener
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended:true}));

app.use(bodyParser.json());

var profiles = [
    {
   name: "test",
   photo: "",
   scores: "",
    }
];

//Routers
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });


// Listener

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

