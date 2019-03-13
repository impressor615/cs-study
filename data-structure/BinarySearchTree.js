class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (current.value === value) return;
      if (current.value > value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return;
    let current = this.root;
    while (current) {
      if (current.value === value) return current;
      if (current.value > value) {
        current = current.left;
      } else {
        current= current.right;
      }
    }
  }

  traverseByBreadth() {
    const visitedNodes = [];
    const queue = [];
    let current = this.root;
    if (!this.root) return visitedNodes; 

    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      visitedNodes.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return visitedNodes;
  }
}

const binarySearchTree = new BinarySearchTree()
  .insert(10)
  .insert(20)
  .insert(5)
  .insert(7)
  .traverseByBreadth()

console.log(binarySearchTree);