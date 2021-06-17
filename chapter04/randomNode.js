const BinarySearchTree = require('./utils/BinarySearchTree');

const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(6);
bst.insert(7);
const counts = {};
let randomNum = 0;

// the real solution is in the actual BST implementation

for (let i = 0; i < 100; i++) {
  randomNum = bst.getRandomNode().value;
  if (counts[randomNum] === undefined) {
    counts[randomNum] = 1;
  } else {
    counts[randomNum]++;
  }
}
for (let num in counts) {
  console.log(`${num}: ${counts[num] / 100}%`);
}
