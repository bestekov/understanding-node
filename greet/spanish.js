var greetings = require('./greetings.json');

var greet = function() {
    console.log(`es: ${greetings.es}`);
}

module.exports = greet;