class BinarySearchTreeWithParent {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

const successor = (node) => {
  if (!node) {
    return;
  }

  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  if (node.parent) {
    if (node.parent.value > node.value) {
      return node.parent.value;
    } else {
      let parent = node.parent;
      while (parent) {
        if (parent.value > node.value) {
          return parent.value;
        }
        parent = parent.parent;
      }
    }
  }
};
