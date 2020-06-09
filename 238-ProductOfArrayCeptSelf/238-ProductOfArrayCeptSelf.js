/**
 * @param {number[]} nums
 * @return {number[]}
 */
const test = require('../test');

var productExceptSelf = function (nums) {
  let result = [];
  let carry = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = 1;
    if (i > 0) {
      carry = carry * nums[i - 1];
      result[i] = carry;
    }
  }
  carry = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    if (j < nums.length - 1) {
      carry = carry * nums[j + 1];
      result[j] = result[j] * carry;
    }
  }
  return result;
};

const test1 = [1, 2, 3, 4];
const test1output = [24, 12, 8, 6];
const test2 = [9, 0, -2];
const test2output = [0, -18, 0];

test.arrayTest(productExceptSelf(test1), test1output);
test.arrayTest(productExceptSelf(test2), test2output);
