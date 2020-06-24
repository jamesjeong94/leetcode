const minWindow = function (s, t) {
  const dict = t.split('').reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  const found = {};
  const required = Object.keys(dict).length;
  let count = 0;
  let a = 0;
  let b = 0;
  let min = '';
  while (b <= s.length) {
    if (count === required) {
      let curr = s[a];
      let substr = s.slice(a, b);
      if (min === '') {
        min = substr;
      }
      if (substr.length < min.length) {
        min = substr;
      }
      found[curr]--;
      if (found[curr] < dict[curr]) {
        count--;
      }

      a++;
    } else {
      let curr = s[b];
      if (found.hasOwnProperty(curr)) {
        found[curr]++;
      } else {
        found[curr] = 1;
      }
      if (found[curr] === dict[curr]) {
        count++;
      }
      b++;
    }
  }
  return min;
};

console.log(minWindow('xyyzyzyx', 'xyz'));
console.log(minWindow('aa', 'aa'));
//'xyyzyzyx'
