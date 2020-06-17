class Heap {
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator || ((parent, child) => parent - child);
  }

  get size() {
    return this.data.length;
  }

  bubbleUp(c) {
    if (c === 0) return;
    const p = Math.floor((c + 1) / 2) - 1;
    if (this.comparator(this.data[p], this.data[c]) > 0) {
      [this.data[p], this.data[c]] = [this.data[c], this.data[p]];
    }
    this.bubbleUp(p);
  }

  bubbleDown(p) {
    const c = 2 * (p + 1) - 1;
    if (c >= this.data.length) return;

    const leftDelta = this.comparator(this.data[p], this.data[c]);
    const rightDelta =
      c + 1 >= this.data.length
        ? 0
        : this.comparator(this.data[p], this.data[c + 1]);
    if (leftDelta <= 0 && rightDelta <= 0) return;

    const swapChildIndex = c + (leftDelta <= rightDelta);
    [this.data[p], this.data[swapChildIndex]] = [
      this.data[swapChildIndex],
      this.data[p],
    ];
    this.bubbleDown(swapChildIndex);
  }

  add(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  poll() {
    if (this.size < 2) return this.data.pop();
    [this.data[0], this.data[this.size - 1]] = [
      this.data[this.size - 1],
      this.data[0],
    ];
    const val = this.data.pop();
    this.bubbleDown(0);
    return val;
  }

  peek() {
    return this.data[0];
  }
}

var MedianFinder = function () {
  this.firstHalf = new Heap((parent, child) => child - parent);
  this.secondHalf = new Heap();
};

// 7,4,3,1,9,2

// secondHalf[7]
// firstHalf[4]

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.secondHalf.add(num);
  this.firstHalf.add(this.secondHalf.poll());
  if (this.secondHalf.size < this.firstHalf.size) {
    this.secondHalf.add(this.firstHalf.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let median = null;
  if (!this.secondHalf.size && !this.firstHalf.size) {
    return median;
  }

  if (this.secondHalf.size > this.firstHalf.size) {
    median = this.secondHalf.peek();
  } else {
    const secondHalfMin = this.secondHalf.peek();
    const firstHalfMax = this.firstHalf.peek();
    median = (secondHalfMin + firstHalfMax) / 2;
  }
  return median;
};
