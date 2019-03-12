class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    this.length += 1;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    return this;
  }

  pop() {
    if (!this.head) return;
    const poppedNode = this.tail;

    this.length -= 1;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return poppedNode;
    }

    this.tail = poppedNode.prev;
    this.tail.next = null;
    poppedNode.prev = null;
    return poppedNode;
  }
}


const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList
  .push('10')
  .push('20')
  .push('30')
  .pop()


console.log(doublyLinkedList);

