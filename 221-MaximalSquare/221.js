var maximalSquare = function (matrix) {
  let max = 0;

  let count = 1;

  const traverse = (x, y) => {
    while (x < matrix.length && y < matrix[x].length) {
      for (let i = x; i <= x + count; i++) {
        for (let j = y; j <= y + count; j++) {
          if (i === matrix.length || j === matrix[x].length) {
            return count * count;
          }

          if (matrix[i][j] === '0') {
            return count * count;
          }
        }
      }

      count += 1;
    }

    return count * count;
  };

  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      count = 1;
      if (matrix[i][j] === '1') {
        const tempMax = traverse(i, j);
        max = Math.max(tempMax, max);
      }
    }
  }
  return max;
};

console.log(
  maximalSquare([
    ['1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '1', '0', '0', '0'],
    ['0', '1', '1', '1', '1', '0', '0', '0'],
  ])
);
