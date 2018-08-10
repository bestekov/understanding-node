// Working with streams from files

var fs = require('fs');

// the 'highWaterMark' option allows you to set the buffer smaller
// that the OS default. the small buffer will fire several chunks
var readable = fs.createReadStream(
    './greet.txt', 
    { encoding:'utf8', highWaterMark: 2*1024 });


var writeable = fs.createWriteStream(
    './greetcopy.txt'
);


// As the text goes into the buffer, if the full contents fits
// you will get all the data. But if it is bigger than the buffer
// every time it fills the buffer, it will emit a 'data' event
// a "chunk" is a set of data from the buffer
readable.on('data', function(chunk) {
    //console.log(chunk)
    console.log(chunk);

    // by having a callback that writes to the file, we can stream the contents
    // to the writable file with each chunk.
    writeable.write(chunk);
});

