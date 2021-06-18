const sumArray = (arr) => arr.reduce((total, num) => total + num, 0);

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  countPathsWithRoot(value, path) {
    let pathCount = 0;
    // accounts for initial call via getNumberOfPathsWithSum
    if (path === undefined) {
      path = [this.value];
    } else {
      path = [...path, this.value];
    }
    if (sumArray(path) === value) {
      pathCount++;
    }
    if (this.left !== null) {
      pathCount += this.left.countPathsWithRoot(value, path);
    }
    if (this.right !== null) {
      pathCount += this.right.countPathsWithRoot(value, path);
    }
    return pathCount;
  }

  getNumberOfPathsWithSum(value) {
    let pathCount = 0;
    pathCount += this.countPathsWithRoot(value);
    if (this.left !== null) {
      pathCount += this.left.countPathsWithRoot(value);
    }
    if (this.right !== null) {
      pathCount += this.right.countPathsWithRoot(value);
    }
    return pathCount;
  }
}
