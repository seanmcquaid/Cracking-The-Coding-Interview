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

  peekStackOne() {}

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

  peekStackTwo() {}

  pushStackThree(value) {
    this.stack.push(value);
    this.stackThreeEnd++;
  }

  popStackThree() {
    this.stack.pop();
    this.stackThreeEnd--;
  }

  peekStackThree() {}
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
