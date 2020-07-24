/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  const newStr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (stack.length > 0) {
        stack.pop();
        newStr.push(s[i]);
      } else {
        newStr.push('');
      }
    } else if (s[i] === '(') {
      stack.push(i);
      newStr.push(s[i]);
    } else {
      newStr.push(s[i]);
    }
  }
  for (let i of stack) {
    newStr[i] = '';
  }
  return newStr.join('');
};

console.log(minRemoveToMakeValid('leetcode))((hi))'));
