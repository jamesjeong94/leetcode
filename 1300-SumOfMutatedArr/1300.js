var findBestValue = function (arr, target) {
  let highest = -Infinity;
  let sum = 0;
  let lowest = Infinity;
  let count = 0;
  let cSum = 0;
  for (let num of arr) {
    highest = num > highest ? num : highest;
    lowest = num < lowest ? num : lowest;
    sum += num;
  }
  let avg = Math.round(target / arr.length);
  if (sum <= target) {
    return highest;
  }
  if (avg <= lowest) {
    return avg;
  }

  for (let num of arr) {
    if (num < avg) {
      cSum += num;
    } else {
      count++;
    }
  }
  let solution = (target - cSum) / count;
  return solution % 1 === 0.5 ? Math.floor(solution) : Math.round(solution);
};

console.log(findBestValue([1, 2, 23, 24, 34, 36], 110));
// console.log(findBestValue([4, 9, 3], 10));
