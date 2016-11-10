const EventEmitter = require('events');

class Dispatcher extends EventEmitter {}

export const dispatcher = new Dispatcher();
