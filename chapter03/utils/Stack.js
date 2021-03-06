class Stack {
  constructor() {
    this.values = [];
  }

  push(value) {
    this.values.push(value);
  }

  pop() {
    return this.values.pop();
  }

  peek() {
    return this.values[this.values.length - 1];
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

module.exports = Stack;
