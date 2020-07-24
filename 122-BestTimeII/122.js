var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let prev = prices[i - 1];
    let current = prices[i];

    if (prev < current) {
      profit += current - prev;
    }
  }

  return profit;
};

console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
