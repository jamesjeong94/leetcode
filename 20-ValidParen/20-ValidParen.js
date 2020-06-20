/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const enclosers = { ']': '[', '}': '{', ')': '(' };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (enclosers[s[i]] !== stack.pop()) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

console.log(isValid('()[]{}'));
