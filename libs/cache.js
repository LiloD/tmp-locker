import { Ticket } from './ticket.js'
// import { dispatcher } from './dispatcher.js'
import {queue} from './queue.js'


const cache = new Map();
const capacity = 10000;
const avaliables = []; 

function insert(_id, expire){
    if(queue.size >= capacity){
        throw new Error('Queue is full');
    }

    var ticketNumber = avaliables.size > 0 ? avaliables.unshift() : queue.size;
    cache.set(ticketNumber, new Ticket(ticketNumber, _id, expire));
    
    setTimeout(function(){
        cache.delete(ticketNumber);
        avaliables.
    }, expire);
}