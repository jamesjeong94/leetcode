var pivotIndex = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - nums[i] - leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
};

console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
