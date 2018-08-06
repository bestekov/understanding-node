// Immediately invoked function expressions (IIFE)


var firstname = 'Anne';

// The variable with the same name *inside* the function
// is scoped to only inside that function
// Wrapping in parens indicates that this is an IIFE

(function(lastname) {

    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);
}('doe'));


console.log(firstname);