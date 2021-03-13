const LinkedList = require('./utils/LinkedList');

function removeDups(linkedList = new LinkedList()) {
  const values = [];
  let currentNode = linkedList.head;

  while (currentNode !== null) {
    if (!values.includes(currentNode.value)) {
      values.push(currentNode.value);
    }
    currentNode = currentNode.next;
  }

  const newLinkedList = new LinkedList();

  for (let i = 0; i < values.length; i++) {
    newLinkedList.append(values[i]);
  }

  return newLinkedList;
}

const linkedList = new LinkedList();
linkedList.append('a');
linkedList.append('b');
linkedList.append('b');
linkedList.append('c');

removeDups(linkedList);
