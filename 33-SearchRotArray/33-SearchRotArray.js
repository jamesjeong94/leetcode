/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return -1;
  if (nums.length === 1) {
    if (nums[0] === target) return 0;
    return -1;
  }
  if (target >= nums[0]) {
    //left
    for (let i = 0; i < nums.length; i++) {
      if (target === nums[i]) return i;
      if (nums[i] > target || nums[i] < nums[i - 1] || i === nums.length - 1) {
        // console.log(nums[i]);
        return -1;
      }
    }
    //right
  } else {
    for (let i = nums.length - 1; i >= 0; i--) {
      // console.log(nums[i - 1], nums[i]);
      if (target === nums[i]) return i;
      if (nums[i] < target || nums[i] > nums[i + 1] || i === 0) {
        return -1;
      }
    }
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([1, 3], 4));
