var numRollsToTarget = function (d, f, target) {
  let count = 0;
  const traverse = (dices, currentSum) => {
    if (currentSum + (d - dices) * f < target) {
      return;
    }
    if (currentSum > target) {
      return;
    }
    if (dices === d) {
      if (currentSum === target) {
        count++;
      }
      return;
    }
    for (let j = 1; j <= f; j++) {
      traverse(dices + 1, currentSum + j);
    }
  };
  traverse(0, 0);
  return count;
};

console.log(numRollsToTarget(30, 30, 500));
