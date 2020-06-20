/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }
  let a = 1;
  let b = 2;
  let c;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};

console.log('ans:', climbStairs(5));
