const subsets = (nums) => {
  let results = [];
  const tree = (start, index, length) => {
    if (start.length < length) {
      for (let j = index; j < nums.length; j++) {
        tree([...start, nums[j]], j + 1, length);
      }
    } else {
      results.push(start);
    }
  };

  for (let i = 0; i <= nums.length; i++) {
    tree([], 0, i);
  }
  return results;
};

console.log(subsets([1, 2, 3]));
