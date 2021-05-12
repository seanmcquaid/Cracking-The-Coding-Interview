const BinarySearchTree = require('./utils/BinarySearchTree');

const checkBalanced = (binarySearchTree = new BinarySearchTree()) => {
  if (binarySearchTree.left === null && binarySearchTree.right !== null) {
    if (
      binarySearchTree.right.left !== null ||
      binarySearchTree.right.right !== null
    ) {
      return false;
    }
  }

  if (binarySearchTree.left !== null && binarySearchTree.right === null) {
    if (
      binarySearchTree.left.left !== null ||
      binarySearchTree.left.right !== null
    ) {
      return false;
    }
  }

  let answer = true;

  if (binarySearchTree.left !== null) {
    answer = answer && checkBalanced(binarySearchTree.left);
  }

  if (binarySearchTree.right !== null) {
    answer = answer && checkBalanced(binarySearchTree.right);
  }

  return answer;
};
