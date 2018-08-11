// Web server - serving a separate file

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // include the separate html file
    var html = fs.readFileSync( __dirname + '/index.htm',
        'utf8'); // setting this to utf8 forces the stream to return a string
    
    // this messsage allows you to do find and replace on the template string
    var message = 'Some awesome message text!';
    html = html.replace('{Message}', message);

    // .end is a simple way to send a response to the browser
    res.end(html);

    // .listen specifies the port and IP
}).listen(1337, '127.0.0.1');

// Then all you have to do is visit localhost:1337 and that creates an event
// listener that listens for a 200 and then sends a response