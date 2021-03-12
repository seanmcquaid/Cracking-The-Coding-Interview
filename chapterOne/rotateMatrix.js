function rotateMatrix(matrix = []) {
  const edge = matrix.length - 1;

  function movePixels(row = 0, col = 0) {
    // starts at m[row][col]
    // moves to m[col][edge - row]
    let fromRow;
    let fromCol;
    let fromPixel;

    // first transformation
    let toRow = row; // 0
    let toCol = col; // 1
    let toPixel = matrix[row][col];

    // Do rotational transformation 4 times
    for (let i = 0; i < 4; i++) {
      fromRow = toRow;
      fromCol = toCol;
      toRow = fromCol;
      toCol = edge - fromRow;

      fromPixel = toPixel;
      toPixel = matrix[toRow][toCol];
      matrix[toRow][toCol] = fromPixel;
    }
  }

  for (let i = 0; i < matrix.length / 2; i++) {
    for (var j = i; j < edge - i; j++) {
      movePixels(i, j);
    }
  }
}

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
