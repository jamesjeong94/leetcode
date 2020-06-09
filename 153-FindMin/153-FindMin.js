/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i];
    }
  }
  return nums[0];
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
