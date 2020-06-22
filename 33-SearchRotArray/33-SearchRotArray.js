/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((end - start) / 2);

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    console.log(start, mid, end);
    console.log(nums[start], nums[mid], nums[end]);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([5, 1, 3], 3));
// console.log(search([3, 0], 1));
