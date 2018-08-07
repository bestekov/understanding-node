// Building a simple Event Emitter

var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('somewhere, someone said hello.');
});

emtr.on('greet', function() {
    console.log('A greeting occurred!');
});


console.log('Hello!');
emtr.emit('greet');