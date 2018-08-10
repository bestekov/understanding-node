// Understanding buffers

var buf = new Buffer('Hello','utf8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');

// in this case, the 'wo' overwrites 'he' because the buffer
// was setup to take 5 characters
console.log(buf.toString());

// Most of the time you don't deal directly witht he buffer
// instead you will often get them back from other other things