function removeDups(linkedList = new LinkedList()) {
  const values = [];
  let currentNode = linkedList.head;

  while (currentNode.next !== null) {
    if (!values.includes(currentNode.value)) {
      values.push(currentNode.value);
    }
    currentNode = currentNode.next;
  }

  // adds potential value for the last node
  if (!values.includes(currentNode.value)) {
    values.push(currentNode.value);
  }

  const newLinkedList = new LinkedList();

  for (let i = 0; i < values.length; i++) {
    newLinkedList.append(values[i]);
  }

  return newLinkedList;
}

const LinkedList = require('./utils/LinkedList');

const linkedList = new LinkedList();
linkedList.append('a');
linkedList.append('b');
linkedList.append('b');
linkedList.append('c');

removeDups(linkedList);
