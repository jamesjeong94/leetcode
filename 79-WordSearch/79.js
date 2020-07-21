var exist = function (board, word) {
  const checkForWord = (i, j, k) => {
    let directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    if (i < 0 || i > board.length - 1 || j < 0 || j > board.length[i] - 1) {
      return false;
    }
    //if curr is 0 that means the word has been found
    if (board[i][j] !== word[k]) {
      return false;
    }
    if (k === word.length - 1) {
      return true;
    }
    //check if out of bounds

    board[i][j] = null;
    for (let [x, y] of directions) {
      if (checkForWord(i + x, j + y, k + 1)) {
        return true;
      }
    }
    board[i][j] = word[k];
    //if first letter of curr exists, check surrounding tiles
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (checkForWord(i, j, 0, [])) {
        return true;
      }
    }
  }
  return false;
};

console.log(
  exist(
    [
      ['C', 'A', 'A'],
      ['A', 'A', 'A'],
      ['B', 'C', 'D'],
    ],
    'AAB'
  )
);
