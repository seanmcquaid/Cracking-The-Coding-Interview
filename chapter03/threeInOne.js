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

  popStackOne() {}

  peekStackOne() {}

  pushStackTwo(value) {
    this.stack.splice(this.stackThreeStart, 0, value);
    this.stackThreeStart++;
    this.stackThreeEnd++;
  }

  popStackTwo() {}

  peekStackTwo() {}

  pushStackThree(value) {
    this.stack.push(value);
    this.stackThreeEnd++;
  }

  popStackThree() {}

  peekStackThree() {}
}

const threeStacks = new ThreeStacks();

threeStacks.pushStackOne(1);
threeStacks.pushStackOne(3);
threeStacks.pushStackTwo(2);
threeStacks.pushStackTwo(4);
threeStacks.pushStackThree(8);
threeStacks.pushStackThree(5);

console.log(threeStacks.stack);
