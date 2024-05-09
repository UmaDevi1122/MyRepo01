
var urlMappings = {};

function shortenUrl() {
    var longUrl = document.getElementById('longUrl').value;
    
    var shortUrl = generateRandomString();
    urlMappings[shortUrl] = longUrl;
    alert('Shortened URL: ' + shortUrl);
}

function decodeUrl() {
    var shortUrl = prompt('Enter the shortened URL:');
    if (urlMappings.hasOwnProperty(shortUrl)) {
        var originalUrl = urlMappings[shortUrl];
        var redirect = confirm('The original URL is: ' + originalUrl + '\n\nDo you want to redirect to this URL?');
        if (redirect) {
            window.location.href = originalUrl;
        }
    } else {
        alert('Shortened URL not found!');
    }
}

function generateRandomString() {
    var randomString = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var length = 6; 
    for (var i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return 'http://short.url/' + randomString; 
}
