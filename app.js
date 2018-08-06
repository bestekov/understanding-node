var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}

// you can access properties with a name
person.greet();

// You can name object properties without a dot
console.log(person[ 'firstname' ]);