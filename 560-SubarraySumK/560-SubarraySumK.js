var subarraySum = function (nums, k) {
  const rollingSums = { 0: 1 };
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (rollingSums.hasOwnProperty(sum - k)) {
      count += rollingSums[sum - k];
    }
    if (rollingSums.hasOwnProperty(sum)) {
      rollingSums[sum] += 1;
    } else {
      rollingSums[sum] = 1;
    }
  }
  return count;
};
