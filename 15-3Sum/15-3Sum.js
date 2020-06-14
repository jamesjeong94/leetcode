/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  const results = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return results;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let b = i + 1;
    let c = nums.length - 1;
    while (b < c) {
      let sum = nums[i] + nums[b] + nums[c];
      // console.log(nums[i], nums[b], nums[c]);
      if (sum === 0) {
        results.push([nums[i], nums[b], nums[c]]);
      }
      if (sum >= 0) {
        while (nums[c] === nums[c - 1]) {
          c--;
        }
        c--;
      }
      if (sum <= 0) {
        while (nums[b] === nums[b + 1]) {
          b++;
        }
        b++;
      }
    }
  }
  return results;
};

// var threeSum = function (nums) {
//   nums = nums.sort((a, b) => a - b);
//   const results = [];
//   const deepDive = (array, index) => {
//     if (array.length === 3) {
//       let sum = array.reduce((acc, curr) => acc + curr, 0);
//       if (sum === 0) {
//         results.push(array);
//       }
//       return;
//     }
//     for (let i = index; i < nums.length; i++) {
//       let temp = [...array];
//       temp.push(nums[i]);
//       deepDive(temp, i + 1);
//     }
//   };
//   deepDive([], 0);
//   var hash = {};
//   var out = [];
//   for (var i = 0; i < results.length; i++) {
//     var key = results[i].join('|');
//     if (!hash[key]) {
//       out.push(results[i]);
//       hash[key] = 'found';
//     }
//   }
//   return out;
// };

const test = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(test));
