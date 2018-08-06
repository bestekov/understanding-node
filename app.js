function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;

}

// You can add a prototype to anything that gets created with the Person 
// class. This is an example of inheritance.
Person.prototype.greet = function() {
    console.log(`Hello ${this.firstName}`);
}

var john = new Person('John', 'Doe');

console.log(john.firstName);
john.greet();

