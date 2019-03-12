class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return ++this.size;
    }

    const oldFirst = this.first;
    newNode.next = oldFirst;
    this.first = newNode;
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return;
    const removedNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }

    this.first = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode.value;
  }
}


const stack = new Stack();

console.log(stack.push(1))
console.log(stack.push(2));
stack.pop();
console.log('stack: ', stack);