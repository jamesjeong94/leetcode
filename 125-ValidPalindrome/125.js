var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (!/^[A-Za-z0-9]/.test(s[left])) {
      left++;
    }

    while (!/^[A-Za-z0-9]/.test(s[right])) {
      right--;
    }
    if (right < 0 || left > s.length - 1) {
      break;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
