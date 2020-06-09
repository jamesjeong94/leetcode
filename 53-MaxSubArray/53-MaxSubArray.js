/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let localMax = 0;
  let globalMax = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    localMax = Math.max(nums[i], nums[i] + localMax);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return globalMax;
};

const test1 = [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6];

console.log(maxSubArray(test1[0]));
