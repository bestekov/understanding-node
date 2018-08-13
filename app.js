// Using Express - Adding a basic template engine

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

// the .use statement means apply some middleware
// this middleware ways anytime "assets" appears, serve the static file
app.use('/assets', express.static(__dirname + '/public'));

// Plug in the template engine. By default this looks for a folder called 'views'
app.set('view engine', 'ejs' );



// you can add custom middleware. It adds a "next" param
app.use('/', function(req, res, next) {
    console.log('Request URL: '+ req.url);
    next(); // means continue to the next middleware, wich in this case
            // will be the `get` methods.
})


// By referencing the assets, the css is loaded and the font gets loaded
app.get('/', function(req, res) {
    // no longer have to send the contents, instead just say "render"
    // and express will look for the index in the view engine
    res.render('index' );

});

app.get('/person/:id', function(req, res) {
    // Can now simplify the code for rendering passing a dynamic value
    res.render('person', { ID: req.params.id });
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'Jon', lastname: 'Snow'});
});

app.listen(port);