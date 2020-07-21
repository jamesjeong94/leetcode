// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var triangleNumber = function (nums) {
//   let count = 0;
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 1; i++) {
//     let a = nums[i];
//     let c = nums[nums.length - 1];
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       console.log(i, j, nums.length - 1);
//       let b = nums[j];
//       if (a + b > c) {
//         count++;
//       }
//     }
//     //j to left
//     let b = nums[i + 1];
//     for (let j = nums.length - 2; j > i + 1; j--) {
//       c = nums[j];
//       console.log(i, i + 1, j);
//       if (a + b > c) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
// console.log(triangleNumber([1, 2, 3, 4, 5, 6]));

const triangleNumber = (nums) => {
  let cnt = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let j = 0;
    let k = i - 1;
    while (j < k) {
      if (nums[j] + nums[k] > nums[i]) {
        cnt += k - j;
        k--;
      } else {
        j++;
      }
    }
  }
  return cnt;
};

console.log(triangleNumber([1, 2, 3, 4, 5, 6]));
