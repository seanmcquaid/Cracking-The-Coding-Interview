const BinarySearchTree = require('./utils/BinarySearchTree');

const validateBst = (binarySearchTree = new BinarySearchTree()) => {
  if (
    binarySearchTree.left > binarySearchTree.value ||
    binarySearchTree.right < binarySearchTree.value
  ) {
    return false;
  }

  const left =
    binarySearchTree.left === null ? true : validateBst(binarySearchTree.left);

  const right =
    binarySearchTree.right === null
      ? true
      : validateBst(binarySearchTree.right);

  return true && left && right;
};
