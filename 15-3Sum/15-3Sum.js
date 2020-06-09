/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const results = [];
  const deepDive = (array, index) => {
    // console.log('a:', array);
    if (array.length === 3) {
      let sum = array.reduce((acc, curr) => acc + curr, 0);
      if (sum === 0) {
        results.push(array);
      }
      return;
    }
    for (let i = index; i < nums.length; i++) {
      let temp = [...array];
      temp.push(nums[i]);
      deepDive(temp, i + 1);
      // console.log(nums[i], temp);
    }
  };
  deepDive([], 0);
  return results;
};

const test = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(test));
