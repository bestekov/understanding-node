// Showing other advanced require function use

var greet = require('./greet1');

greet();

// This also works
var greet2 = require('./greet2').greet;
greet2();

// call the method directly
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

// What happens if we require the same file again?
var greet3b = require('./greet3');
greet3b.greet();

// Despite making a new require statement, greet3b
// is the SAME OBJECT as greet3. This is because
// the file was *cached* so we pass the same object
// BY REFERENCE. So the earlier change to that object
// is reflected.


// in this new example by calling the constructor in THIS file
// we get a new object instead of passing the same object
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greeting = "new greeting 4";
grtr.greet();


var Greet4b = require('./greet4');
var grtr2 = new Greet4b();
grtr2.greet();

// call only the public method on the object
var greet5 = require('./greet5');
greet5.greet();