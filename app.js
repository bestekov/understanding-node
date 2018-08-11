// Web server - routing

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    // routing gets really complicated!!
    if( req.url === '/api' ){
        res.writeHead(200, { 'Content-Type': 'text/json' });
        
        var obj = {
            firstname: 'Jon',
            lastname: 'Snow',
        };

        res.end(JSON.stringify(obj));
    } else if( req.url === '/' ) {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    } else {
        // need to handle the case of an unhandled route
        var message = 'No page found';
        res.writeHead(404);
        res.end(message);
    }


}).listen(1337, '127.0.0.1');

// Then all you have to do is visit localhost:1337 and that creates an event
// listener that listens for a 200 and then sends a response