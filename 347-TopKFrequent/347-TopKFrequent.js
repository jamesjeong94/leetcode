/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (!cache.hasOwnProperty(nums[i])) {
      cache[nums[i]] = 1;
    } else {
      cache[nums[i]] += 1;
    }
  }
  const values = Object.keys(cache);
  values.sort((a, b) => {
    return cache[b] - cache[a];
  });
  console.log(values);
  let prev = values[0];
  let i = 1;
  let results = [prev];
  while (results.length < k) {
    results.push(values[i]);
    i++;
  }
  return results;
};

console.log(
  topKFrequent(
    [
      3,
      2,
      3,
      1,
      2,
      4,
      5,
      5,
      6,
      7,
      7,
      8,
      2,
      3,
      1,
      1,
      1,
      10,
      11,
      5,
      6,
      2,
      4,
      7,
      8,
      5,
      6,
    ],
    10
  )
);
