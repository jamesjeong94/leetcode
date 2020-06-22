/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];
  for (let i = 0; i < numRows; i++) {
    let row = Array(i + 1);
    for (let j = 0; j < i + 1; j++) {
      if (j === 0) {
        row[j] = 1;
      } else {
        let topLeft = !res[i - 1][j - 1] ? 0 : res[i - 1][j - 1];
        let top = !res[i - 1][j] ? 0 : res[i - 1][j];
        row[j] = topLeft + top;
      }
    }
    res.push(row);
  }
  return res;
};

console.log(generate(5));
