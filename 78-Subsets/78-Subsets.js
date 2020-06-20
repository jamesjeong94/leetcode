const subsets = (nums) => {
  let results = [];
  const tree = (start, index, length) => {
    // console.log(dup);
    if (start.length < length) {
      for (let j = index; j < nums.length; j++) {
        let dup = [...start];
        dup.push(nums[j]);
        tree(dup, j + 1, length);
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
