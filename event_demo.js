const EventEmitter = require('events');
//Create Class
class MyEvent extends EventEmitter {}
//Init Object
const myEvent = new MyEvent();
//Event Listener
myEvent.on('onEvent', () => {
console.log('Event Fired men!');
});
//Init Event using emit
myEvent.emit('onEvent');
myEvent.emit('onEvent');
myEvent.emit('onEvent');
myEvent.emit('onEvent');

