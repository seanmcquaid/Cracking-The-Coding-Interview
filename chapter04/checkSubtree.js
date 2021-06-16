class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isSubtree(tree2) {
    if (isSameTree(this, tree2)) {
      return true;
    } else {
      let answer = false;
      if (this.left !== null) {
        answer = answer || this.left.isSubtree(tree2);
      }
      if (this.right !== null) {
        answer = answer || this.right.isSubtree(tree2);
      }
      return answer;
    }
  }
}

const isSameTree = (tree1, tree2) => {
  let answer = tree1.value === tree2.value;
  if (!answer) {
    return answer;
  }

  if (tree1.left !== null && tree2.left !== null) {
    answer = answer && isSameTree(tree1.left, tree2.left);
  } else if (
    (tree1.left === null && tree2.left !== null) ||
    (tree1.left !== null && tree2.left === null)
  ) {
    answer = answer && false;
  }

  if (tree1.right !== null && tree2.right !== null) {
    answer = answer && isSameTree(tree1.right, tree2.right);
  } else if (
    (tree1.right === null && tree2.right !== null) ||
    (tree1.right !== null && tree2.right === null)
  ) {
    answer = answer && false;
  }

  return answer;
};

/* TEST */
const a1 = new Tree(1);
const a2 = new Tree(2);
const a3 = new Tree(3);
const a4 = new Tree(4);
const a5 = new Tree(5);
const a6 = new Tree(6);
const a7 = new Tree(7);

const b3 = new Tree(3);
const b6 = new Tree(6);
const b7 = new Tree(7);

const c3 = new Tree(3);
const c6 = new Tree(6);
const c8 = new Tree(8);

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a3.right = a7;

b3.left = b6;
b3.right = b7;

c3.left = c6;
c3.right = c8;

console.log(a1.isSubtree(b3), true);
console.log(a1.isSubtree(c3), false);
