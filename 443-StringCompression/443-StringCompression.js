/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0;
  let count = 0;
  let end = 0;
  while (i < chars.length) {
    if (chars[i] === chars[i - 1]) {
      end = i;
    } else {
      chars.splice(i, i - end);
    }
    console.log(end);
    i++;
  }
  return chars;
};

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
