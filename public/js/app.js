var express = require('express');
var app = express();

var hostname = "localhost";
var port = "8080";

// first parameter is the mount point, second is the location in the file system
app.use(express.static(__dirname + "/../"));

app.get('/', function(req, res) {
    res.redirect('index.html');
});

app.listen(port);
console.log(`Running on ${hostname}:${port}`);