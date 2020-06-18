function stock_runs(prices) {
  let max = 0;
  let localMax = 0;
  let inc = null;
  for (let i = 0; i < prices.length; i++) {
    if (inc === null) {
      if (prices[i] > prices[i - 1]) {
        inc = true;
      } else {
        inc = false;
      }
    }
    if (prices[i] > prices[i - 1] && inc === true) {
      localMax++;
    }
    if (prices[i] < prices[i - 1] && inc === false) {
      localMax++;
    }
    if (prices[i] > prices[i - 1] && inc === false) {
      localMax = 1;
    }
    if (prices[i] < prices[i - 1] && inc === true) {
      localMax = 1;
    }
    if (localMax > max) {
      max = localMax;
    }
  }
  return max;
}

console.log(stock_runs([2, 3, 4, 3, 2, 1]));
