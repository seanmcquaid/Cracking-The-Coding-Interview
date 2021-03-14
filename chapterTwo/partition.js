const LinkedList = require('./utils/LinkedList');

function partition(linkedList = new LinkedList(), partitionValue = 0) {
  const lesserValues = [];
  const greaterOrEqualValues = [];
  let currentNode = linkedList.head;

  while (currentNode !== null) {
    if (currentNode.value < partitionValue) {
      lesserValues.push(currentNode.value);
    } else {
      greaterOrEqualValues.push(currentNode.value);
    }
    currentNode = currentNode.next;
  }

  const newLinkedList = new LinkedList();

  for (let i = 0; i < lesserValues.length; i++) {
    newLinkedList.append(lesserValues[i]);
  }

  for (let j = 0; j < greaterOrEqualValues.length; j++) {
    newLinkedList.append(greaterOrEqualValues[j]);
  }

  return newLinkedList;
}
