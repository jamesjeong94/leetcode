const spiralOrder = (matrix) => {
  if (matrix.length === 0) {
    return matrix;
  }
  if (matrix[0].length === 0) {
    return matrix;
  }
  let results = [];
  let cycles =
    matrix.length <= matrix[0].length
      ? Math.floor((matrix.length - 1) / 2)
      : Math.floor((matrix[0].length - 1) / 2);
  let row = matrix.length;
  let col = matrix[0].length;
  // console.log('cycles:', cycles);
  for (let x = 0; x <= cycles; x++) {
    //top
    for (let i = x; i < matrix[0].length - x; i++) {
      results.push(matrix[x][i]);
    }
    //right
    for (let i = x + 1; i < matrix.length - x - 1; i++) {
      results.push(matrix[i][col - 1 - x]);
    }
    //bottom
    if (row - 1 - x !== x) {
      for (let i = col - x - 1; i >= x; i--) {
        results.push(matrix[row - x - 1][i]);
      }
    }
    // left
    if (col - 1 - x !== x) {
      for (let i = row - (x + 2); i >= x + 1; i--) {
        results.push(matrix[i][x]);
      }
    }
  }
  return results;
};
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  spiralOrder([
    [2, 5, 8],
    [4, 0, -1],
  ])
);
// console.log(spiralOrder([[7], [9], [6]]));
