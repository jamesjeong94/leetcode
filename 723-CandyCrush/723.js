/**
 * @param {number[][]} board
 * @return {number[][]}
 */
const checkMatch = (match, board, coords) => {
  if (match.length >= 3) {
    for (let coord of match) {
      let x = coord[0];
      let y = coord[1];
      coords.push([x, y]);
    }
    return true;
  }
  return false;
};

const dropNulls = (board) => {
  for (let i = 0; i < board[0].length; i++) {
    let stack = [];
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== null) {
        stack.push(board[j][i]);
      }
    }
    for (let j = board.length - 1; j >= 0; j--) {
      if (stack.length > 0) {
        board[j][i] = stack.pop();
      } else {
        board[j][i] = 0;
      }
    }
  }
};

const crush = (board, coords) => {
  for (let coord of coords) {
    board[coord[0]][coord[1]] = null;
  }
};

var candyCrush = function (board) {
  let isStable = false;
  let didChange = false;
  let coords = [];
  const checkSurroundings = (i, j, match, ref, isDown) => {
    if (i < 0 || i > board.length - 1 || j < 0 || j > board[i].length - 1) {
      if (checkMatch(match, board, coords)) {
        didChange = true;
      }
      return;
    }
    if (board[i][j] !== ref) {
      if (checkMatch(match, board, coords)) {
        didChange = true;
      }
      return;
    }
    if (board[i][j] === ref && board[i][j] !== 0) {
      match.push([i, j]);
      if (isDown) {
        checkSurroundings(i + 1, j, [...match], ref, true);
        checkSurroundings(i, j + 1, [[i, j]], ref, false);
      } else {
        checkSurroundings(i + 1, j, [[i, j]], ref, true);
        checkSurroundings(i, j + 1, [...match], ref, false);
      }
    }
  };
  while (!isStable) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        checkSurroundings(i + 1, j, [[i, j]], board[i][j], true);
        checkSurroundings(i, j + 1, [[i, j]], board[i][j], false);
      }
    }
    if (didChange) {
      isStable = false;
      crush(board, coords);
      dropNulls(board);
      coords = [];
    } else {
      isStable = true;
    }
    didChange = false;
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
