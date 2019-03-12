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

  shift() {
    if (!this.head) return;
    
    this.length -= 1;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return oldHead;
    }

    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    return oldHead;
  }

  unshift(val) {
    this.length += 1;

    if (!this.head) return this.push(val);
    const newNode = new Node(val);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
}


const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList
  .push('10')
  .push('20')
  .push('30')
  .unshift('unshift result')


console.log(doublyLinkedList);

