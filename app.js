// Working with files

var fs = require('fs');


// readFileSync means *synchronous* which you would only want
// if you were doing something like reading a requird config
// otherwise you might block your execution
var greet = fs.readFileSync(
    //__dirname + '/greet.txt', //can use __dirname special var or ./
    './greet.txt',
    'utf8',);

console.log(greet);

// instead we can use readFile, that takes a *callback*
var greet2 = fs.readFile('./greet.txt','utf8',
    function(err, data) {
        console.log(data);
});

// having this *after* the call proves that the greet2 function was
// async, because done fires first!
console.log('Done!');