const EventEmitter = require('events');

//Create class
class MyEmmiter extends EventEmitter {}

// Create object
const myEmmiter = new MyEmmiter();

// Event listener
myEmmiter.on('event', _ => console.log('Event fired!'));

// Init event
myEmmiter.emit('event');
myEmmiter.emit('event');
myEmmiter.emit('event');
myEmmiter.emit('event');
myEmmiter.emit('event');