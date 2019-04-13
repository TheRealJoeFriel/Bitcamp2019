var express = require('express');
var app = express();

var hostname = "localhost";
var port = "8080";

// first parameter is the mount point, second is the location in the file system
app.use('/static', express.static(__dirname + "/../"));

app.get('/', function(req, res) {
    res.redirect('/static/index.html');
});

app.listen(port);
console.log(`Running on ${hostname}:${port}`);