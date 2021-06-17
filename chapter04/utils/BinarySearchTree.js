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
}

module.exports = BinarySearchTree;
