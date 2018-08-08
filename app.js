// Using the built-in node event emitter

// Only had to change one line of code to use the built-in
// event emitter instead. It works the same way as the custom, one except
// that it has a lot more features.
var Emitter = require('events');

var emtr = new Emitter();

// However... the emitter relies on magic strings, which is bad
/*
emtr.on('greet', function() {
    console.log('somewhere, someone said hello.');
});

emtr.on('greet', function() {
    console.log('A greeting occurred!');
});


console.log('Hello!');
emtr.emit('greet');

*/

// instead we can try to avoid magic strings
var eventConfig = require('./config.js').events

// We can store the string in one place and refernce it
// elsewhere so that the tool can help maintain consistency
emtr.on(eventConfig.GREET, function() {
    console.log('somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
    console.log('A greeting occurred!');
});


console.log('Hello!');
emtr.emit('greet');