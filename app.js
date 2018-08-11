// Web server - serving a separate file

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // instead of readFile, we can create a readable stream and pipe to the res
    fs.createReadStream( __dirname + '/index.htm','utf8').pipe(res);

}).listen(1337, '127.0.0.1');

// Then all you have to do is visit localhost:1337 and that creates an event
// listener that listens for a 200 and then sends a response