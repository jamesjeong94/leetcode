var moveZeroes = function (nums) {
  let count = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
    } else {
      i++;
    }
  }
  for (let j = 0; j < count; j++) {
    nums.push(0);
  }
  return nums;
};

console.log(moveZeroes([1, 12, 0, 4, 0]));
//[1,3,12,0,0]
