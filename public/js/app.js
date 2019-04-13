var express = require('express');
var app = express();

// first parameter is the mount point, second is the location in the file system
app.use("/public", express.static(__dirname));

app.get('/', function(req, res) {
    res.redirect('../index.html');
});

app.listen(8080);