class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
    this.tail = undefined;
  }

  addToHead(val) {
    // Your code here
    let newHead = new LinkedListNode(val);
    if (this.head) {
      newHead.next = this.head
    } else {
      this.tail = newHead;
    }
    this.head = newHead;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let newTail = new LinkedListNode(val);
    if (this.tail) {
      this.tail.next = newTail;
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
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;