const LinkedList = require('./utils/LinkedList');

function loopDetection(list = new LinkedList()) {
  const stack = [];
  let currentNode = list.head;

  while (currentNode !== null) {
    if (stack.includes(currentNode)) {
      return currentNode;
    }
    stack.push(currentNode);
    currentNode = currentNode.next;
  }
}
