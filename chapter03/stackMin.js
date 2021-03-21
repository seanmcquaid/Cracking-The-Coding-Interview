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

  min() {
    let minValue;
    for (let value of this.values) {
      if (value < minValue || !minValue) {
        minValue = value;
      }
    }
    return minValue;
  }
}

const stack = new Stack();

stack.push(2);
stack.push(10);

console.log(stack.min());
