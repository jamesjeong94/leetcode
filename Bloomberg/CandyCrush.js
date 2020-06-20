//input: "aabbbacd"
//output: "cd"

const candyCrush = (string) => {
  const traverse = (substr) => {
    if (substr.length < 3) {
      return substr.join('');
    }
    let left;
    let right;
    for (let i = 0; i < substr.length; i++) {
      if (left === undefined) {
        left = i;
      }
      right = i;
      if (substr[left] !== substr[right] || right === substr.length - 1) {
        if (right - left > 2) {
          substr.splice(left, right - left);
          return traverse(substr);
        } else if (substr.length === 3 && left === 0 && right === 2) {
          return '';
        } else {
          left = i;
        }
      }
    }
    return substr.join('');
  };
  return traverse(string.split(''));
};

console.log(candyCrush('aabbccddeeedcbaf'));
