var greetings = require('./greetings.json');

var greet = function() {
    console.log(`en: ${greetings.en}`);
}

module.exports = greet;