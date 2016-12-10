const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

process.on('uncaughtException', (err) => {
  console.log("Whoops! There is a error!!!");
});

myEmitter.emit('error', new Error('whoops!'));
