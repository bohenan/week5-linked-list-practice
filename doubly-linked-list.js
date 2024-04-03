class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    let newHead = new DoublyLinkedListNode(val);
    if (this.head) {
      newHead.next = this.head;
      this.head.prev = newHead;
    } else {
      this.tail = newHead;
    }
    this.head = newHead;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let newTail = new DoublyLinkedListNode(val);
    if (this.tail) {
      this.tail.next = newTail;
      newTail.prev = this.tail;
    } else {
      this.head = newTail;
    }
    this.tail = newTail;
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;