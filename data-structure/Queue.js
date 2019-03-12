class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return ++this.size;
    }

    this.last.next = newNode;
    this.last = newNode;
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return;
    if (this.size === 1) {
      this.last = null;
    }

    const removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;
    this.size--;

    return removedNode;

  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log('queue: ', queue);
console.log('dequee:', queue.dequeue())
console.log('queue: ', queue);