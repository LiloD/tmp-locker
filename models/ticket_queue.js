import { Ticket } from './ticket.js'
import { dispatcher } from '/action.js'

export class TicketQueue {
    constructor(capacity){
        this.capacity = size || 10000;
        this.avaliables = [];   //initial as empty
        this.queue = new Map(); //ECMAScript 2015 Map type
    }

    set(content, expireTime){   
        var ticketNumber = this.avaliables.size > 0 ? this.avaliables.shift() : this.queue.size;
        // var newTicket = new Ticket(ticketNumber);
        var 
    }
}