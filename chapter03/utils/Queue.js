class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  add(value) {}

  remove() {}

  peek() {
    return this.front !== null ? this.front.value : null;
  }

  isEmpty() {
    return (this.front = null);
  }
}

module.exports = Queue;
