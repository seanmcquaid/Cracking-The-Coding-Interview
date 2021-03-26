const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  add(value) {
    const node = new LinkedList(value);
    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      const prevBack = this.back;
      this.back = node;
      prevBack.next = this.back;
    }
  }

  remove() {
    const removed = this.front;
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    return removed !== null ? removed.value : null;
  }

  peek() {
    return this.front !== null ? this.front.value : null;
  }

  isEmpty() {
    return (this.front = null);
  }
}

module.exports = Queue;
