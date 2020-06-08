/**
 * @param {number[]} nums
 * @return {boolean}
 */

const test = require('../test.js');

var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

test1 = [[1, 2, 3, 4]];

test.literalTest(containsDuplicate(test1), false);
