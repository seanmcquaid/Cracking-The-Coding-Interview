const BinarySearchTree = require('./utils/BinarySearchTree');
const LinkedList = require('./utils/LinkedList');

const listOfDepths = (binarySearchTree = new BinarySearchTree()) => {
  const listOfLinkedLists = [];
  let currentNodes = [];
  let nextNodes = [];
  let currentNode = binarySearchTree;

  currentNodes.push(currentNode);

  while (currentNodes.length !== 0) {
    currentNode = currentNodes.pop();
    const newNode = new LinkedList(currentNode.value);
    if (currentNode.left !== null) {
      nextNodes.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      nextNodes.push(currentNode.right);
    }
    if (currentNodes.length === 0) {
      listOfLinkedLists.push(newNode);
      currentNodes = [...nextNodes];
      nextNodes = [];
    }
  }

  return listOfLinkedLists;
};
