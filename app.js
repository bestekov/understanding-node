// Using Express

var express = require('express');

// Express is using the same http library we did earlier
// Instead it just wraps all that other code so that the application
// code can be way more succinct
var app = express();

// set equal to the environment variable or 3000
var port = process.env.PORT || 3000;

// a more powerful version of the server. the request and response
// are express requests and responses that provide additionaly features
// additionally express supports standard verbs
app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello World!!</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'Jon', lastname: 'Snow'});
});

// Sets up the server listener
app.listen(port);