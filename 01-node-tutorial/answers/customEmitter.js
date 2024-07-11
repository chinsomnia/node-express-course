const EventEmitter = require('events');

const firstEmitter = new EventEmitter();


firstEmitter.on('response', () => {
    console.log('first emitter data received')
})

firstEmitter.on('response', () => {
    console.log('another emitter data received')
})

console.log('hello')

setInterval(() => {  
    firstEmitter.emit("timer", "repeating message");  
}, 2000);

firstEmitter.on('timer', (msg) => console.log(msg));

firstEmitter.emit('response')