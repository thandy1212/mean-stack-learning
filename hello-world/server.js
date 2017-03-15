// Setup of the server
var express = require('express');
var app = express(); //This creates an express app that can have routes and other methods
var mongoose = require('mongoose'); //Mongoose provides easy access to MongoDB
var morgan = require('morgan'); // Morgan allows for logging requests between client and server
var bodyParser = require('body-parser'); //Body Parser allows for easy parsing of an HTTP request body from JSON
var methodOverride = require('method-override'); //Method override allows for DELETE and POST requests

app.use(morgan('dev')); // Logs every request to the console
app.use(function(req,res,next){
  //console.log(req.body);

  res.send("Hello World!");
  console.log(res.body);
});

app.get(/.*fly$/, function(req, res){
  console.log(req.baseUrl);
  res.send('/.*fly$/');
});

app.listen(8080);
console.log("App listening on port 8080");
