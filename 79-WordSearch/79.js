var exist = function (board, word) {
  let wordExists = false;
  const checkForWord = (i, j, word, tempBoard) => {
    if (word.length === 0) {
      wordExists = true;
      return;
    }
    let remainder = [...word];
    let char = remainder[0];
    console.log(char, word.join(''), tempBoard);
    if (i < 0 || i > board.length - 1 || j < 0 || j > board.length[i] - 1) {
      return;
    }
    if (tempBoard[i][j] === char) {
      let passDownBoard = [...tempBoard];
      console.log('got it!', i, j);
      passDownBoard[i][j] = null;
      remainder.shift();
      checkForWord(i + 1, j, [...remainder], [...passDownBoard]);
      checkForWord(i, j + 1, [...remainder], [...passDownBoard]);
      checkForWord(i - 1, j, [...remainder], [...passDownBoard]);
      checkForWord(i, j - 1, [...remainder], [...passDownBoard]);
    } else {
      // console.log('not working', board);
      return;
    }
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      checkForWord(i, j, word.split(''), board);
    }
  }
  return wordExists;
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
