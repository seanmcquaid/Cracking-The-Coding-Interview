function rotateMatrix(matrix = []) {
  const edge = matrix.length - 1;

  for (let i = 0; i < matrix.length / 2; i++) {
    const rowOne = matrix[i];
    const rowTwo = matrix[edge - i];
    matrix[i] = rowTwo;
    matrix[edge - i] = rowOne;
  }

  return matrix;
}

let testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1],
];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
