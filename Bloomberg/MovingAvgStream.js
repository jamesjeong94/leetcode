/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.cache = [];
  this.size = size;
  this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.cache.length < this.size) {
    this.cache.push(val);
    this.sum += val;
  } else {
    let removedVal = this.cache.shift();
    this.cache.push(val);
    this.sum += val - removedVal;
  }
  return this.sum / this.cache.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 *
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

const m = new MovingAverage(3);
console.log(m.next(1));
console.log(m.next(10));
console.log(m.next(3));
console.log(m.next(5));
