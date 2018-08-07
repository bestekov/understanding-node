function Emitter() {
    this.events = {};
}

// Add two properties to the prototype (i.e.
// the code that goes in every copy of this
// ON is a common name for adding a particular event
// such as "on X happening"
Emitter.prototype.on = function(type, listener) {
    // create a new property for a type of thing to listen for
    this.events[type] = this.events[type] || [];
    // put a list of things to listen for that type
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if ( this.events[type] ) {
        // if that key exists in the event list,
        // invoke all the listeners when it happens
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;