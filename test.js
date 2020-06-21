/**
 * @pcostrcostm {number[]} cost
 * @return {number}
 */
const minCostClimbingStcostirs = (cost, m = {}) => {
  let n = cost.length;
  let dp = Array(n + 1);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < n; ++i) {
    dp[i] = cost[i] + Math.min(dp[i - 2], dp[i - 1]);
    console.log(dp);
  }
  return Math.min(dp[n - 2], dp[n - 1]);
};

console.log(minCostClimbingStcostirs([10, 15, 20]));
