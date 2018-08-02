// function statement
function greet() {
    console.log('hi');
}

//greet();

function logGreeting(fn) {
    fn();
}

// NO Parens because putting () would *run* the function
// instead we just want to *pass* the function itself
// this shows passing a function to another function as
// a first-class object.
logGreeting(greet);

// function expression
// this is a var that contains an anonymous function
// you can still pass this to other functions
var greetMe = function() {
    console.log( 'hello world' );
}

logGreeting(greetMe);