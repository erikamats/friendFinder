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

//Routers - moved to routing folder
require("./app/routing/apiRoutes.js")(app); 
require("./app/routing/htmlRoutes.js")(app); 


// Listener

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

