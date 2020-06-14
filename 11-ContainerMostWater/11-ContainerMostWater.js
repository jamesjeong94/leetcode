/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let maxHeight = height[left] > height[right] ? height[right] : height[left];
    if (height[right] >= height[left]) {
      let area = maxHeight * (right - left);
      if (area > max) {
        max = area;
      }
      left++;
    } else if (height[left] > height[right]) {
      let area = maxHeight * (right - left);
      if (area > max) {
        max = area;
      }
      right--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
