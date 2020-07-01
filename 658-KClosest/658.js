/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let res = [];
  let minDiffIndex = Infinity;
  let minDiff = Infinity;
  for (let i = 0; i < arr.length / 2; i++) {
    if (Math.abs(arr[i] - x) < minDiff) {
      minDiff = Math.abs(arr[i] - x);
      minDiffIndex = i;
    }
    if (Math.abs(arr[arr.length - i - 1] - x) < minDiff) {
      minDiff = Math.abs(arr[arr.length - i - 1] - x);
      minDiffIndex = arr.length - 1 - i;
      console.log('yo', minDiffIndex, minDiff);
    }
  }
  console.log(minDiffIndex);
  res.push(arr[minDiffIndex]);
  let left = minDiffIndex;
  let right = minDiffIndex;
  while (res.length !== k) {
    let leftDiff = left - 1 >= 0 ? Math.abs(arr[left - 1] - x) : Infinity;
    let rightDiff =
      right + 1 < arr.length ? Math.abs(arr[right + 1] - x) : Infinity;
    if (rightDiff < leftDiff) {
      res.push(arr[right + 1]);
      right++;
    } else {
      res.unshift(arr[left - 1]);
      left--;
    }
  }
  return res;
  //first find index of element closest to x
  //set left and right pointer to that index
  //push in the value at that index to result array
  //compare left - 1 to right + 1
  // if (x-L > x-R) push in el at right+1, right++
};

console.log(findClosestElements([1, 1, 2, 2, 2, 2, 2, 3, 3], 3, 3));
