// Inheriting from event emitter pt 3 - use ES6
'use strict';

var EventEmitter = require('events');


// The ES6 syntax is extends instead of needing utils inherits
// This is just syntactic sugar that makes it easier to type
// but under the hood it is working exactly how it worked before
class Greetr extends EventEmitter{
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet( data ) {
        console.log(this.greeting + ': ' + data );
        // It can do this.emit because it inherited from EvenEmitter
        this.emit( 'greet', data );
    }
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data );
});

greeter1.greet('Test');