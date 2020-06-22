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
    if (cache[a] === cache[b]) {
      if (b > a) {
        return -1;
      } else {
        return 1;
      }
    }
    return cache[b] - cache[a];
  });
  let prev = values[0];
  let i = 1;
  let results = [prev];
  while (results.length < k) {
    results.push(values[i]);
    i++;
  }
  return results;
};

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3));
