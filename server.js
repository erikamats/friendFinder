var http = require("http");
var express = require("express");
var fs = require("fs");

var PORT = 8000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/survey.html":
          return renderHome(path + "home.html", res);

        default:
         return renderHome("/home.html", res);
    }
}

function renderHome(filePath, res) {
    return fs.readFile(__dirname + filePath, function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });

    // end of handleRequest below
}

// Starts our server.
server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
