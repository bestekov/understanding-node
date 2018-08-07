// In the 5th pattern we are NOT exposing the greeting

var greeting = 'Hello world!!!!';

function greet() {
    console.log(greeting);
}

// replace exports with a NEW function
module.exports = {
    greet : greet,
}