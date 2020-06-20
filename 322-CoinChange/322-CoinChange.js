/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   if (amount === 0 ){
//     return 0
//   }
//   let count = 0;
//   coins.sort((a, b) => b - a);
//   let rem = amount;
//   let total = 0;
//   for (let i = 0; i < coins.length; i++) {
//     console.log(coins[i], rem);
//     if (coins[i] > rem && i !== 0) {
//       continue;
//     } else {
//       let quant = Math.floor(rem / coins[i]);
//       count += quant;
//       total += quant * coins[i];
//       rem = rem % coins[i];
//     }
//   }
//   if (total !== amount) {
//     return -1;
//   }
//   return count;
// };

const coinChange = (coins, amount) => {
  coins.sort((a, b) => {
    a - b;
  });
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
