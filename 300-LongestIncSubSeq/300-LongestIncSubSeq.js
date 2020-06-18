/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }
  let globalMax = 0;
  let dp = [];
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    let largestSeen = 0;
    for (let j = 0; j < i; j++) {
      if (dp[j] > largestSeen && nums[i] > nums[j]) {
        largestSeen = dp[j];
      }
    }
    dp[i] = largestSeen + 1;
    if (dp[i] > globalMax) {
      globalMax = dp[i];
    }
  }
  return globalMax;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
