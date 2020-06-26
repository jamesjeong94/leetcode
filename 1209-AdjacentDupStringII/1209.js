/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const remover = (str) => {
    let stack = [];
    let count = 1;
    let left = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i - 1] && count < k) {
        count++;
      } else {
        if (count === k) {
          stack.push([left, i]);
        }
        count = 1;
        left = i;
      }
    }
    if (count === k) {
      stack.push([left, str.length]);
    }
    if (stack.length === 0) {
      return str;
    }
    for (let j = 0; j <= stack.length; j++) {
      let [left, right] = stack.pop();
      let count = right - left;
      str.splice(left, count);
    }
    // console.log(str);
    return remover(str);
  };
  let res = remover(s.split(''));
  return res.join('');
};

console.log(removeDuplicates('abcd', 4));
