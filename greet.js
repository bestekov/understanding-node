// here we change the object to a function
exports = function() {
    console.log('Hello');
}

// You might think these would be the same, but they aren't
// originally exports and module.exports are equal
// but then by passing a *value* to exports it is
// PASS BY VALUE, which replaces it, breaking it
console.log(exports);
console.log(module.exports);