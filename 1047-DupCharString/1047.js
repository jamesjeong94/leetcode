var removeDuplicates = function (S) {
  // let strArr = S.split('');
  // let left = 0;
  // while (left < strArr.length) {
  //   if (strArr[left - 1] === strArr[left]) {
  //     strArr.splice(left - 1, 2);
  //     left = 0;
  //   }
  //   left++;
  // }
  // return strArr.join('');
};

var removeDuplicates = function (S) {
  let stack = [];
  if (S.length === 0) {
    return '';
  }
  for (let i = 0; i < S.length; i++) {
    if (stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }
  return stack.join('');
};

console.log(removeDuplicates('abbaca'));
