var generateParenthesis = function (n) {
  const results = [];
  const backtrack = (str, left, right) => {
    if (str.length === 2 * n) {
      results.push(str);
      return;
    }
    if (left < n) {
      backtrack(str + '(', left + 1, right);
    }
    if (right < left) {
      backtrack(str + ')', left, right + 1);
    }
  };
  backtrack('', 0, 0);
  return results;
};
