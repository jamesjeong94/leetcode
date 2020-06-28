var validWordSquare = function (words) {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      console.log(i, j, j, i);
      if (words[i] === undefined || words[j] === undefined) {
        return false;
      }
      if (words[i][j] !== words[j][i]) {
        return false;
      }
    }
  }
  return true;
};

console.log(validWordSquare(['abc', 'b']));
