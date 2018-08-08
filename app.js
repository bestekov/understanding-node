// Inheriting from event emitter

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello world!';
}

// anything that inherits from Greetr should also get the prototypes from 
/// EventEmitter. So we can use the on and emit methods!
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function( data ) {
    console.log(this.greeting + ': ' + data );
    // It can do this.emit because it inherited from EvenEmitter
    this.emit( 'greet', data );
}


var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data );
});

greeter1.greet('Test');