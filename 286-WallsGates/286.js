var wallsAndGates = function (rooms) {
  const copy = (array) => {
    const newArr = [];
    for (let row of array) {
      newArr.push([...row]);
    }
    return newArr;
  };
  let vertBound = rooms.length;
  let horizontalBound = rooms[0].length;
  const traverse = (i, j, depth, gateChecked, dummy) => {
    console.log(depth);
    if (
      i > vertBound - 1 ||
      i < 0 ||
      j > horizontalBound - 1 ||
      j < 0 ||
      rooms[i][j] === -1 ||
      dummy[i][j] === null
    ) {
      return;
    }
    if (rooms[i][j] === 0 && gateChecked === true) {
      return;
    }
    dummy[i][j] = null;
    if (rooms[i][j] > 0) {
      rooms[i][j] = Math.min(rooms[i][j], depth);
    }
    traverse(i + 1, j, depth + 1, true, dummy);
    traverse(i, j + 1, depth + 1, true, dummy);
    traverse(i - 1, j, depth + 1, true, dummy);
    traverse(i, j - 1, depth + 1, true, dummy);
  };
  for (let i = 0; i < vertBound; i++) {
    for (let j = 0; j < horizontalBound; j++) {
      if (rooms[i][j] === 0) {
        traverse(i, j, 0, false, copy(rooms));
      }
    }
  }
  return rooms;
};

console.log(
  wallsAndGates([
    [
      0,
      2147483647,
      -1,
      2147483647,
      2147483647,
      -1,
      -1,
      0,
      0,
      -1,
      2147483647,
      2147483647,
      0,
      -1,
      2147483647,
      2147483647,
      2147483647,
      2147483647,
      0,
      2147483647,
      0,
      -1,
      -1,
      -1,
      -1,
      2147483647,
      -1,
      -1,
      2147483647,
      2147483647,
      -1,
      -1,
      0,
      0,
      -1,
      0,
      0,
      0,
      2147483647,
      0,
      2147483647,
      -1,
      -1,
      0,
      -1,
      0,
      0,
      0,
      2147483647,
    ],
    [
      2147483647,
      0,
      -1,
      2147483647,
      0,
      -1,
      -1,
      -1,
      -1,
      0,
      0,
      2147483647,
      2147483647,
      -1,
      -1,
      2147483647,
      -1,
      -1,
      2147483647,
      2147483647,
      -1,
      0,
      -1,
      2147483647,
      0,
      2147483647,
      -1,
      2147483647,
      0,
      2147483647,
      0,
      2147483647,
      -1,
      2147483647,
      0,
      2147483647,
      -1,
      2147483647,
      0,
      2147483647,
      2147483647,
      0,
      -1,
      2147483647,
      -1,
      -1,
      -1,
      0,
      2147483647,
    ],
  ])
);
