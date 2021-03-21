class StackOfPlates {
  constructor(max) {
    this.stack = [[]];
    this.amountOfStacks = 1;
    this.max = max;
  }

  push(value) {
    if (this.stack[this.amountOfStacks - 1].length >= this.max) {
      this.stack.push([value]);
      this.amountOfStacks++;
    } else {
      this.stack[this.amountOfStacks - 1].push(value);
    }
  }
}

const stackOfPlates = new StackOfPlates(2);

stackOfPlates.push(1);
stackOfPlates.push(1);
stackOfPlates.push(2);
stackOfPlates.push(2);
stackOfPlates.push(2);

console.log(stackOfPlates.stack);
