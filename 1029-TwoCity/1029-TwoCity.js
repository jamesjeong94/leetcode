const twoCitySchedCost = function (costs) {
  let totalCost = 0;
  let n = costs.length / 2;
  costs.sort((a, b) => {
    return a[0] - b[0] - (a[1] - b[1]);
  });
  for (let i = 0; i < n; i++) {
    totalCost += costs[i][0] + costs[i + n][1];
  }
  return totalCost;
};

console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ])
);
