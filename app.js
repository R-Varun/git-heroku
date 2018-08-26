var express = require('express');
var app = express();
var server = require('http').createServer(app);

// EXPRESS JS PORT
var port = process.env.PORT || 3000;

// START SERVER
server.listen(port, function () {
    console.log("Server running on port: " + port.toString())
});

app.get("/", function(req, res) {
    res.send("THIS WORKS! varun merge example 2");
});
