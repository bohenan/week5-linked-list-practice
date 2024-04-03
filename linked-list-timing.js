const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let linkedList = new LinkedList();
let doublyLinkedList = new DoublyLinkedList();

let increment = 3000000;
singleHeadStartTime = Date.now();
for (let n = 0; n < 10 * increment; n++) {
    linkedList.addToHead(1);
}
singleHeadEndTime = Date.now();
console.log(`${singleHeadEndTime - singleHeadStartTime}`);


singleTailStartTime = Date.now();
for (let n = 0; n < 10 * increment; n++) {
    linkedList.addToTail(1);
}
singleTailEndTime = Date.now();
console.log(`${singleTailEndTime - singleTailStartTime}`);


doubleHeadStartTime = Date.now();
for (let n = 0; n < 10 * increment; n++) {
    doublyLinkedList.addToHead(1);
}
doubleHeadEndTime = Date.now();
console.log(`${doubleHeadEndTime - doubleHeadStartTime}`);


doubleTailStartTime = Date.now();
for (let n = 0; n < 10 * increment; n++) {
    doublyLinkedList.addToTail(1);
}
doubleTailEndTime = Date.now();
console.log(`${doubleTailEndTime - doubleTailStartTime}`);
