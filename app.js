//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;
var fs = require('fs');
var spotify = require('./scripts/spotify.js');

//Create HTTP server and listen on port 3000 for requests
fs.readFile('./index.html', function (err, html) {

	if (err) throw err;    

	http.createServer(function(request, response) {  
		response.writeHeader(200, {"Content-Type": "text/html"});  
		// response.css(request, reponse);
		response.write(html);  
		response.end();  
		}).listen(port);
		console.log(`Server running at http://${hostname}:${port}/`);

	});

	function css(request, response) {
		if (request.url === '/styles.css') {
		  response.writeHead(200, {'Content-type' : 'text/css'});
		  var fileContents = fs.readFileSync('./styles.css', {encoding: 'utf8'});
		  response.write(fileContents);
		}
	  };  