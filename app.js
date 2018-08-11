// Using Express - Routing, static files, and middleware

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

// the .use statement means apply some middleware
// this middleware ways anytime "assets" appears, serve the static file
app.use('/assets', express.static(__dirname + '/public'));

// you can add custom middleware. It adds a "next" param
app.use('/', function(req, res, next) {
    console.log('Request URL: '+ req.url);
    next(); // means continue to the next middleware, wich in this case
            // will be the `get` methods.
})


// By referencing the assets, the css is loaded and the font gets loaded
app.get('/', function(req, res) {
    res.send(`<html><head><link href=assets/style.css 
    type=text/css rel=StyleSheet 
    /></head><body><h1>Hello World!!</h1></body></html>`);

});

app.get('/person/:id', function(req, res) {
    res.send(`<html><head></head><body><h1>Hello World, `
        + `${req.params.id}!</h1></body></html>`);
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'Jon', lastname: 'Snow'});
});

app.listen(port);