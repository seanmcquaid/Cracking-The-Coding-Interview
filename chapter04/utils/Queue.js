const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.front = [];
    this.back = [];
  }

  add(value) {
    if (this.front.length === 0) {
      this.front.unshift(value);
    } else {
      this.back.unshift(value);
    }
  }

  remove() {
    if (this.front.length === 0) {
      return null;
    }
    const removedValue = this.front.shift();
    if (this.back.length !== 0) {
      const firstValueFromBack = this.back.shift();
      this.front.unshift(firstValueFromBack);
    }
    return removedValue;
  }

  peek() {
    return this.front[0] ? this.front[0] : null;
  }

  isEmpty() {
    return this.front.length === 0;
  }
}

module.exports = Queue;
