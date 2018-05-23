// Your htmlRoutes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.


var http = require("http");
var express = require("express");
var fs = require("fs");

var PORT = 8000;

app.get("/", function(req, res) {
    console.log(" responded - moving to survey");
  });


  app.get("/:page", function(req, res) {
    var chosen = req.params.character;
    console.log(chosen);

    res.end();
  });
  


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  