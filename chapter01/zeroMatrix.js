function zeroMatrix(matrix = [[]]) {
  const rowsWithZero = {};
  const columnsWithZero = {};
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    if (row.includes(0)) {
      rowsWithZero[i] = true;
      const column = row.indexOf(0);
      columnsWithZero[column] = true;
    }
  }
  const rowsWithZeroMatrix = matrix.map((row, rowIndex) => {
    if (rowsWithZero[rowIndex]) {
      return row.map((column) => 0);
    }
    return row;
  });
  const rowsAndColumnsWithZeroMatrix = rowsWithZeroMatrix.map((row) =>
    row.map((column, columnIndex) => {
      if (columnsWithZero[columnIndex]) {
        return 0;
      }
      return column;
    })
  );

  console.log(rowsAndColumnsWithZeroMatrix);

  return rowsAndColumnsWithZeroMatrix;
}

// Testing
let testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

zeroMatrix(testMatrix);

// function should mutate the matrix to the following:
// [
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [0, 0, 0, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1]
// ]
