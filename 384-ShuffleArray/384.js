/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = [...nums];
  this.array = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.array = [...this.original];
  return this.array;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = 0; i < this.array.length; i++) {
    let temp = this.array[i];
    let random = Math.floor(Math.random() * this.array.length);
    this.array[i] = this.array[random];
    this.array[random] = temp;
  }
  return this.array;
};

let test = new Solution([1, 2, 3, 4, 5]);
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
