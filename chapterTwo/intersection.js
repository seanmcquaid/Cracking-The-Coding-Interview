const LinkedList = require('./utils/LinkedList');

function intersection(listOne = new LinkedList(), listTwo = new LinkedList()) {
  const listOneStack = [];
  const listTwoStack = [];
  let listOneCurrentNode = listOne.head;
  let listTwoCurrentNode = listTwo.head;

  while (listOneCurrentNode !== null) {
    listOneStack.push(listOneCurrentNode);
    listOneCurrentNode = listOneCurrentNode.next;
  }

  while (listTwoCurrentNode !== null) {
    listTwoStack.push(listTwoCurrentNode);
    listTwoCurrentNode = listTwoCurrentNode.next;
  }

  if (listOneStack.length === 0 || listTwoStack.length === 0) {
    return null;
  }

  for (let node of listOneStack) {
    if (listTwoStack.includes(node)) {
      return node;
    }
  }

  return null;
}
