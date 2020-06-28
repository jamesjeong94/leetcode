var islandPerimeter = function (grid) {
  const checkSurroundings = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
      return 1;
    } else if (grid[i][j] === 0) {
      return 1;
    } else {
      return 0;
    }
  };
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += checkSurroundings(i + 1, j);
        perimeter += checkSurroundings(i - 1, j);
        perimeter += checkSurroundings(i, j + 1);
        perimeter += checkSurroundings(i, j - 1);
      }
    }
  }
  return perimeter;
};
