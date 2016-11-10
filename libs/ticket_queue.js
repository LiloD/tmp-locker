import { Ticket } from './ticket.js'
// import { dispatcher } from './dispatcher.js'

const queue = new Map();
const capacity = 10000;
const avaliables = [];  

function insert(_id, expire){
    if(queue.size >= capacity){
        throw new Error('Queue is full');
    }

    var ticketNumber = avaliables.size > 0 ? avaliables.unshift() : queue.size;
    queue.set(ticketNumber, new Ticket(ticketNumber, _id, expire));
    
    setTimeout(function(){
        // queue.delete(ticketNumber);
    }, expire);
}