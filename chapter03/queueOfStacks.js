class MyQueue {
  constructor() {
    this.front = [];
    this.back = [];
  }

  add(value) {
    if (this.front.length === 0) {
      this.front.unshift(value);
    } else {
      this.back.push(value);
    }
  }

  remove() {
    if (this.front.length === 0) {
      return null;
    }
    this.front.shift();
    const firstValueFromBack = this.back.shift();
    this.front.unshift(firstValueFromBack);
  }
}

const queueOfStacks = new MyQueue();

queueOfStacks.add(1);
queueOfStacks.add(2);
queueOfStacks.add(3);

console.log(queueOfStacks.front, queueOfStacks.back);

queueOfStacks.remove();

console.log(queueOfStacks.front, queueOfStacks.back);
