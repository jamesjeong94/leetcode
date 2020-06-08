// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
const test = require('../test.js');

const twoSum = function (nums, target) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    // console.log(diff);

    if (cache[nums[i]] !== undefined) {
      return [cache[nums[i]], i];
    }
    if (!cache[diff]) {
      cache[diff] = i;
    }
  }
};
// console.log(twoSum([2, 7, 11, 15], 9));
test1 = [[2, 7, 11, 15], 9];
test2 = [[71, 2, 7, 4, 12, 15], 11];

test.arrayTest(twoSum(...test2), [2, 3]);
