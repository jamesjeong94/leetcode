var trap = function (height) {
  const subArrays = [];
  let sum = 0;
  let left = 0;
  let leftIndex = 0;
  let rightIndex = 0;
  let didDecrease = false;
  for (let i = 0; i < height.length; i++) {
    let curr = height[i];
    console.log(leftIndex, i, didDecrease);
    left = height[leftIndex];
    if (curr >= left) {
      if (!didDecrease) {
        leftIndex = i;
      } else {
        subArrays.push(height.slice(leftIndex, i + 1));
        didDecrease = false;
        leftIndex = i;
      }
    } else {
      didDecrease = true;
      if (height[i] > height[i - 1]) {
        rightIndex = i;
      }
    }
  }
  subArrays.push(height.slice(leftIndex, rightIndex + 1));
  console.log(subArrays, leftIndex, rightIndex, didDecrease);
  subArrays.forEach((subArray) => {
    let lowestBound = Math.min(subArray[0], subArray[subArray.length - 1]);
    for (let i = 1; i <= subArray.length - 2; i++) {
      if (subArray[i] < lowestBound) {
        sum += lowestBound - subArray[i];
      }
    }
  });
  return sum;
};

console.log(trap([9, 6, 8, 8, 5, 6, 3]));
