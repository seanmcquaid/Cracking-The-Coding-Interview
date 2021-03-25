const Stack = require('./utils/Stack');

function sortStack(originalStack) {
  const sortedStack = new Stack();

  while (!originalStack.isEmpty()) {
    let tempValue = originalStack.pop();
    while (!sortedStack.isEmpty() && sortedStack.peek() > tempValue) {
      originalStack.push(sortedStack.pop());
    }
    sortedStack.push(tempValue);
  }

  while (!sortedStack.isEmpty()) {
    originalStack.push(sortedStack.pop());
  }

  return originalStack;
}

const originalStack = new Stack();

originalStack.push(1);
originalStack.push(3);
originalStack.push(2);

console.log(sortStack(originalStack));
