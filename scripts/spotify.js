var ClientID = '154106d34b2d4c9b8a8a1c55561771ce'
var responseType = 'token';

function connect() {
    var theUrl = "https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function search(searchQuery) {
    var searchResult = "https://api.spotify.com/v1/${searchQuery}";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function loadPlaylist() {

}

function play() {

}

