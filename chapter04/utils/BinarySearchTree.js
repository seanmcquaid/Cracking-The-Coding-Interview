const Queue = require('./Queue');

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (this.value === undefined) {
      this.value = value;
    } else if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  printLevelOrder() {
    let level = [];
    let q = new Queue();
    let nextq = new Queue();
    let currNode;

    q.add(this);
    while (!q.isEmpty()) {
      currNode = q.remove();
      level.push(currNode.value);
      if (currNode.left !== null) {
        nextq.add(currNode.left);
      }
      if (currNode.right !== null) {
        nextq.add(currNode.right);
      }
      if (q.isEmpty()) {
        console.log(level.join(','));
        level = [];
        q = nextq;
        nextq = new Queue();
      }
    }
  }

  find(value) {
    if (value === this.value) {
      return this;
    } else {
      if (value < this.value) {
        if (this.left === null) {
          return null;
        } else {
          this.left.find(value);
        }
      } else {
        if (this.right === null) {
          return null;
        } else {
          this.right.find(value);
        }
      }
    }
  }

  count() {
    const q = new Queue();
    q.add(this);
    let node;
    let count = 0;
    while (!q.isEmpty()) {
      node = q.remove();
      count++;
      if (node.left !== null) {
        q.add(node.left);
      }
      if (node.right !== null) {
        q.add(node.right);
      }
    }
    return count;
  }

  iterateToNumber(number) {
    const q = new Queue();
    q.add(this);
    let node;
    let count = 0;
    while (!q.isEmpty()) {
      node = q.remove();
      count++;
      if (count === number) {
        return node;
      }
      if (node.left !== null) {
        q.add(node.left);
      }
      if (node.right !== null) {
        q.add(node.right);
      }
    }
    return undefined;
  }
}

module.exports = BinarySearchTree;
