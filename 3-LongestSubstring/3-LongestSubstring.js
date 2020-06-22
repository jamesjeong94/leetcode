var lengthOfLongestSubstring = function (s) {
  let cache = {};
  if (s.length === 0) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  if (s.length === 2) {
    if (s[0] === s[1]) {
      return 1;
    }
    return 2;
  }
  let i = 0;
  let j = 0;
  let globalMax = 0;
  while (i < s.length && j < s.length) {
    if (!cache.hasOwnProperty(s[j])) {
      cache[s[j]] = true;
      j++;
      globalMax = j - i > globalMax ? j - i : globalMax;
    } else {
      delete cache[s[i]];
      i++;
    }
  }
  return globalMax;
};

console.log(lengthOfLongestSubstring('pwwkew'));
