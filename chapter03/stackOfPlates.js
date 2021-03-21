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

  pop() {
    if (this.stack[this.amountOfStacks - 1].length === 1) {
      this.amountOfStacks--;
      return this.stack.pop();
    } else {
      return this.stack[this.amountOfStacks - 1].pop();
    }
  }

  popAt(index) {
    return this.stack[index].pop();
  }
}

const stackOfPlates = new StackOfPlates(2);

stackOfPlates.push(1);
stackOfPlates.push(1);
stackOfPlates.push(2);
stackOfPlates.push(2);
stackOfPlates.push(2);

console.log(stackOfPlates.stack);
