var ClientID = '154106d34b2d4c9b8a8a1c55561771ce'
var RedirectURI = 'http://therealjoefriel.github.io/Bitcamp2019/callback.html'
var responseType = 'token';
var exports = module.exports = {}

$('#buttonboi').click(function(){
    console.log('button clicked');
    $.ajax({url: '', success:function(res){
        console.log('server response is', res);
    }});
});

function buttonAction1(res){
    res.send('ok');
}
router.get("/", function (req, res) {
    buttonAction1(res);
});

exports.getURL = function() {
    if (location.host == ''){
        RedirectURI = 'callback.html'
    }
    return 'https://accounts.spotify.com/authorize?client_id='+ClientID+
    '&redirect_uri=' + RedirectURI + 
    '&scope=playlist-read-private%20playlist-modify%20playlist-modify-private' +
    '&response_type=' + responseType;
}

exports.sendRequest = function(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); 
    return xmlHttp.responseText;
}

exports.connect = function() {
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

exports.search = function(searchQuery) {
    var searchResult = "https://api.spotify.com/v1/${searchQuery}";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", searchResult, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

exports.loadPlaylist = function() {

}

exports.play = function() {

}

exports.test = function() {
    alert("hello word");
}
