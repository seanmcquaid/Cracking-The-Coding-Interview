const LinkedList = require('./utils/LinkedList');

function findKthToLast(k = 0, linkedList = new LinkedList()) {
  const length = linkedList.getLength();
  const positionOfElement = length - k + 1;

  if (length < k) {
    return null;
  }

  let currentNode = linkedList.head;
  let i = length;

  while (i !== positionOfElement) {
    currentNode = currentNode.next;
    i--;
  }

  return currentNode;
}

const linkedList = new LinkedList();
linkedList.append('a');
linkedList.append('b');
linkedList.append('d');
linkedList.append('c');

console.log(findKthToLast(2, linkedList));
