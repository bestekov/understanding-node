// Starting a hello world webserver

var http = require('http');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // .end is a simple way to send a response to the browser
    res.end('<h1>Hello world!</h1>\n'
                + '<p>This is listening to the world!</p>\n');

    // .listen specifies the port and IP
}).listen(1337, '127.0.0.1');

// Then all you have to do is visit localhost:1337 and that creates an event
// listener that listens for a 200 and then sends a response