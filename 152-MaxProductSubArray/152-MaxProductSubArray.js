/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let globalMax = nums[0];
  let localMax = nums[0];
  let localMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      let temp = localMax;
      localMax = localMin;
      localMin = temp;
    }
    localMax = Math.max(Math.max(nums[i], nums[i] * localMax));
    localMin = Math.min(nums[i], nums[i] * localMin);
    globalMax = Math.max(localMax, globalMax);
  }
  return globalMax;
};

const test = [2, 3, -2, 4];
const test2 = [-1, -2, -9, -6];
console.log(maxProduct(test));
console.log(maxProduct(test2));
