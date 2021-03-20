const LinkedList = require('./utils/LinkedList');

function deleteMiddleNode(linkedList = new LinkedList()) {
  const length = linkedList.getLength();
  const middlePosition = Math.ceil(length / 2);

  linkedList.delete(middlePosition);
}

const linkedList = new LinkedList();
linkedList.append('a');
linkedList.append('b');
linkedList.append('c');
linkedList.append('d');

deleteMiddleNode(linkedList);
