/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function (s) {
//   let numberRegex = new RegExp('[0-9]', 'g');
//   let result = '';
//   const traverse = (str, num) => {
//     let i = 0;
//     let brackets = {
//       '[': 0,
//       ']': 0,
//     };
//     if (!str.includes('[') && !str.includes(']')) {
//       for (let j = 0; j < num; j++) {
//         result += str;
//       }
//     }
//     let left;
//     while (i < str.length) {
//       console.log(i, str);
//       // let innerNum;
//       if (str[i].match(numberRegex)) {
//         innerNum = str[i];
//         left = i + 2;
//       }
//       if (str[i] === '[' || str[i] === ']') {
//         brackets[s[i]]++;
//       }
//       if (brackets['['] === brackets[']'] && brackets['['] > 0) {
//         traverse(str.slice(left, i), innerNum);
//         brackets = {
//           '[': 0,
//           ']': 0,
//         };
//       }
//       i++;
//     }
//   };
//   traverse(s, 1);
//   return result;
// };

const decodeString = (s) => {
  let multiply = [];
  let tempMult = '';
  let repeatStr = [];
  let solution = '';

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      tempMult += s[i];
    } else if (s[i] === '[') {
      multiply.push(tempMult);
      tempMult = '';
      repeatStr.push(solution);
      solution = '';
    } else if (s[i] === ']') {
      solution = repeatStr.pop() + solution.repeat(multiply.pop());
    } else {
      solution += s[i];
    }
  }
  return solution;
};

console.log(decodeString('2[abc]3[cd]ef'));
console.log(decodeString('abc3[cd]xyz'));
