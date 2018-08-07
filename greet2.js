// here we change the object to a function
exports.greet = function() {
    console.log('Hello');
}

console.log(exports);
console.log(module.exports);