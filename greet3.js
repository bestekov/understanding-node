// Third pattern of require method

function Greetr() {
    this.greeting = 'Hello world!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

// replace exports with a NEW function
module.exports = new Greetr();