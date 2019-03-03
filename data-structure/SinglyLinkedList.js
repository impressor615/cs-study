class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return;
    const current = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return;
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count += 1;
    }

    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;

    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const prevNodeNext = prevNode.next;
    prevNode.next = newNode;
    newNode.next = prevNodeNext;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    this.length -= 1;
    return removed;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i += 1) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList()
list.push(5);
list.push(10);
list.push(11);
list.push(11);
list.print();
list.reverse();
list.print();
