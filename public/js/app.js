var express = require('express');
var app = express();
var spotify = require('./spotify.js');
var SpotifyWebApi = require('spotify-web-api-node');
app.use('/static', express.static(__dirname + "/../"));

var scopes = ['user-read-private', 'user-read-email'],
    clientID = '154106d34b2d4c9b8a8a1c55561771ce',
    redirectURI = 'http://localhost:8080/callback.html',
    state = 'some-state-of-my-choice';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
    redirectURI: redirectURI,
    clientID: clientID
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

console.log(authorizeURL);

//var code = login();

// spotifyApi.authorizationCodeGrant(code).then(
//     function(data) {
//       console.log('The token expires in ' + data.body['expires_in']);
//       console.log('The access token is ' + data.body['access_token']);
//       console.log('The refresh token is ' + data.body['refresh_token']);
  
//       // Set the access token on the API object to use it in later calls
//       spotifyApi.setAccessToken(data.body['access_token']);
//       spotifyApi.setRefreshToken(data.body['refresh_token']);
//     },
//     function(err) {
//       console.log('Something went wrong!', err);
//     }
//   );

//   spotifyApi.refreshAccessToken().then(
//     function(data) {
//       console.log('The access token has been refreshed!');
  
//       // Save the access token so that it's used in future calls
//       spotifyApi.setAccessToken(data.body['access_token']);
//     },
//     function(err) {
//       console.log('Could not refresh access token', err);
//     }
//   );

var hostname = "localhost";
var port = "8080";

app.get('/', function(req, res) {
    res.redirect('/static/index.html');
});

app.listen(port);
console.log(`Running on ${hostname}:${port}`);

console.log(spotify);