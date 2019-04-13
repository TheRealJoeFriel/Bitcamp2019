var ClientID = '154106d34b2d4c9b8a8a1c55561771ce'
var RedirectURI = 'http://therealjoefriel.github.io/Bitcamp2019/callback.html'
var responseType = 'token';

function getURL() {
    'https://accounts.spotify.com/authorize?client_id='+ClientID+
        '&redirect_uri=' + RedirectURI + 
        '&scope=playlist-read-private%20playlist-modify%20playlist-modify-private' +
        '&response_type=' + responseType;
}

function sendRequest(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); 
    return xmlHttp.responseText;
}

function connect() {
    return {
        login: function() {
            var url = getURL();

            var response = sendRequest(url);

            var width = 400, height = 600, left = (screen.width / 2) - (width / 2), top = (screen.height / 2) - (height / 2);

            return loginWindow = window.open(url, 'Spotify', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
        
        },

        getAccessToken: function() {
            var expires = 0 + localStorage.getItem('pa_expires', '0');
				if ((new Date()).getTime() > expires) {
					return '';
				}
            var token = localStorage.getItem('pa_token', '');
            return token;
        },

    }

}

function search(searchQuery) {
    var searchResult = "https://api.spotify.com/v1/${searchQuery}";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", searchResult, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function loadPlaylist() {

}

function play() {

}

