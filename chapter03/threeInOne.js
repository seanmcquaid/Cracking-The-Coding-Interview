class ThreeStacks {
  constructor() {
    this.stack = [];
    this.stackOneStart = 0;
    this.stackTwoStart = 0;
    this.stackThreeStart = 0;
    this.stackThreeEnd = 0;
  }

  pushStackOne(value) {
    this.stack.splice(this.stackTwoStart, 0, value);
    this.stackTwoStart++;
    this.stackThreeStart++;
    this.stackThreeEnd++;
  }

  popStackOne() {
    this.stack.splice(this.stackTwoStart - 1, 1);
    this.stackTwoStart--;
    this.stackThreeStart--;
    this.stackThreeEnd--;
  }

  peekStackOne() {
    return this.stackOneStart === this.stackTwoStart ? null : this.stack[0];
  }

  pushStackTwo(value) {
    this.stack.splice(this.stackThreeStart, 0, value);
    this.stackThreeStart++;
    this.stackThreeEnd++;
  }

  popStackTwo() {
    this.stack.splice(this.stackThreeStart - 1, 1);
    this.stackThreeStart--;
    this.stackThreeEnd--;
  }

  peekStackTwo() {
    return this.stackTwoStart === this.stackThreeStart
      ? null
      : this.stack[this.stackTwoStart];
  }

  pushStackThree(value) {
    this.stack.push(value);
    this.stackThreeEnd++;
  }

  popStackThree() {
    this.stack.pop();
    this.stackThreeEnd--;
  }

  peekStackThree() {
    return this.stackThreeStart === this.stackThreeEnd
      ? null
      : this.stack[this.stackThreeStart];
  }
}

const threeStacks = new ThreeStacks();

threeStacks.pushStackOne(1);
threeStacks.pushStackOne(3);
threeStacks.pushStackTwo(2);
threeStacks.pushStackTwo(4);
threeStacks.pushStackThree(8);
threeStacks.pushStackThree(5);

threeStacks.popStackOne();
threeStacks.popStackTwo();
threeStacks.popStackThree();

console.log(threeStacks.stack);

console.log(threeStacks.peekStackOne());
console.log(threeStacks.peekStackTwo());
console.log(threeStacks.peekStackThree());
