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

  get(index) {
    if (index < 0 || index >= this.length) return;
    if (!this.head) return;
    const midPoint = this.length / 2;
    let count = this.length - 1;
    let current = this.tail; 
    if (index >= midPoint) {
      while (count !== index) {
        count -= 1;
        current = current.prev;
      }

      return current;
    }

    count = 0;
    current = this.head;
    while (count !== index) {
      count += 1;
      current = current.next;
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;

    nextNode.prev = newNode;
    newNode.next = nextNode;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    this.length -= 1;
    const removedNode = this.get(index);
    const { prev, next } = remo
    prev.next = next;
    next.prev = prev;
    removedNode.prev = null;
    removedNode.next = null;

    return removedNode;
  }
}


const doublyLinkedList = new DoublyLinkedList();
const result = doublyLinkedList
  .push('10')
  .push('20')
  .push('30')
  .unshift('unshift result')
  .insert(1, 'inserted')

console.log(doublyLinkedList);