// Create web server
var express = require('express');
var app = express();
var port = 3000;

// Create a route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Start server
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});