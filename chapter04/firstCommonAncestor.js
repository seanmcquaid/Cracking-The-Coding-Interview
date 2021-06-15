class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  isAncestor(node2) {
    if (this === node2) {
      return true;
    } else {
      let answer1 = false;
      let answer2 = false;
      if (this.left !== null) {
        answer1 = this.left.isAncestor(node2);
      }
      if (this.right !== null) {
        answer2 = this.right.isAncestor(node2);
      }
      return false || answer1 || answer2;
    }
  }
}

const firstCommonAncestor = (node1, node2) => {
  let currNode = node1;
  while (!currNode.isAncestor(node2)) {
    if (currNode === null) {
      throw Error;
    } else {
      currNode = currNode.parent;
    }
  }
  return currNode.value;
};
