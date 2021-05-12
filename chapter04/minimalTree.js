const BinarySearchTree = require('./utils/BinarySearchTree');

const minimalTree = (array = []) => {
  const binarySearchTree = new BinarySearchTree();
  let leftArray = array.slice(0, Math.floor(array.length / 2));
  let rightArray = array.slice(Math.floor(array.length / 2), array.length);

  while (leftArray.length !== 0 && rightArray.length !== 0) {
    if (leftArray.length !== 0) {
      binarySearchTree.insert(leftArray.pop());
    }

    if (rightArray.length !== 0) {
      binarySearchTree.insert(rightArray.shift());
    }
  }

  return binarySearchTree;
};

minimalTree([1, 2, 3, 4, 5, 6]);
