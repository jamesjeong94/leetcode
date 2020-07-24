/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;
  let rowMax = grid.length - 1;
  let colMax = grid[0].length - 1;
  const traverse = (row, col) => {
    let count = 0;
    if (
      row < 0 ||
      row > rowMax ||
      col < 0 ||
      col > colMax ||
      grid[row][col] === null ||
      grid[row][col] === 0
    ) {
      return 0;
    }
    if (grid[row][col] === 1) {
      count += 1;
      grid[row][col] = null;
    }
    count += traverse(row + 1, col);
    count += traverse(row - 1, col);
    count += traverse(row, col + 1);
    count += traverse(row, col - 1);
    return count;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let count = traverse(i, j);
        max = Math.max(count, max);
      }
    }
  }
  return max;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
