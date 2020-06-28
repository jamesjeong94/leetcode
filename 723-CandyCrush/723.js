const check = (i, j, coords, board, value, isVertical) => {
  // console.log(i, j);
  if (i < board.length && i >= 0 && j < board[i].length && j >= 0) {
    if (board[i][j] === value) {
      coords.push([i, j]);
      if (isVertical === null || isVertical === false) {
        check(i, j + 1, coords, board, value, false);
      }
      if (isVertical === true || isVertical === null) {
        check(i + 1, j, coords, board, value, isVertical);
      }
    }
  } else {
    if (coords.length >= 3) {
      change(coords, board);
    }
  }
};

const change = (coords, board) => {
  for (let coord of coords) {
    let i = coord[0];
    let j = coord[1];
    board[i][j] = null;
  }
};

const drop = ()

const candyCrush = (board) => {
  let isStable = false
  while (!isStable) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        check(i, j, [], board, board[i][j], null);
      }
    }
  }
  return board;
};

console.log(
  candyCrush([
    [110, 5, 112, 113, 114],
    [210, 211, 5, 213, 214],
    [310, 311, 3, 313, 314],
    [410, 411, 412, 5, 414],
    [5, 1, 512, 3, 3],
    [610, 4, 1, 613, 614],
    [710, 1, 2, 713, 714],
    [810, 1, 2, 1, 1],
    [1, 1, 2, 2, 2],
    [4, 1, 4, 4, 1014],
  ])
);
