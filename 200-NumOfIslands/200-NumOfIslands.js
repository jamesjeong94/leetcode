/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let numberOfIslands = 0;
  if (grid.length === 0) {
    return numberOfIslands;
  }
  const check = (row, col) => {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === '0' ||
      grid[row][col] === '2'
    ) {
      return;
    }
    if (grid[row][col] === '1') {
      grid[row][col] = '2';
    }
    check(row + 1, col);
    check(row - 1, col);
    check(row, col + 1);
    check(row, col - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        numberOfIslands += 1;
        check(i, j);
      }
    }
  }
  return numberOfIslands;
};

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
);
