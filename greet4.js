// Fourth pattern here instead of making a new constructor
// we set the 

function Greetr() {
    this.greeting = 'Hello world!!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

// replace exports with a NEW function
module.exports = Greetr;