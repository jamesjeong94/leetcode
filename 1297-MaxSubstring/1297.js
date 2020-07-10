/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
// var maxFreq = function (s, maxLetters, minSize, maxSize) {
//   let charOccurences = { [s[0]]: 1 };
//   let result = 0;
//   let uniqueCount = 1;
//   let left = 0;
//   let right = 0;
//   while (right < s.length) {
//     let size = right - left + 1;
//     console.log(size, uniqueCount, charOccurences);
//     if (size >= minSize && size <= maxSize && uniqueCount <= maxLetters) {
//       console.log(s.split('').splice(left, size).join(''));
//       result++;
//     }
//     if (size < maxSize) {
//       right++;
//       if (charOccurences.hasOwnProperty(s[right])) {
//         charOccurences[s[right]] += 1;
//       } else {
//         uniqueCount += 1;
//         charOccurences[s[right]] = 1;
//       }
//     } else {
//       if (charOccurences[s[left]] === 1) {
//         delete charOccurences[s[left]];
//         uniqueCount--;
//       } else {
//         charOccurences[s[left]]--;
//       }
//       left++;
//     }
//   }
//   return result;
// };
const maxFreq = (s, maxLetters, minSize, maxSize) => {
  const substrMap = new Map();
  let max = 0;
  for (let i = 0; i <= s.length - minSize; ++i) {
    const substr = s.substr(i, minSize);
    const letterSet = new Set();
    for (const char of substr) {
      letterSet.add(char);
      if (letterSet.size > maxLetters) continue;
    }
    const count = substrMap.has(substr) ? substrMap.get(substr) + 1 : 1;
    substrMap.set(substr, count);
    max = count > max ? count : max;
  }
  return max;
};
console.log(maxFreq('aababcaab', 2, 3, 4));
