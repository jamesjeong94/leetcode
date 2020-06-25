class MinHeap {
  constructor(compareFunc) {
    this.compareFunc = compareFunc;
    this.heap = [];
  }

  insert(val) {
    this.heap.unshift(val);
    this.heap.sort(this.compareFunc);
  }

  extract() {
    if (this.size === 0) return null;
    return this.heap.shift();
  }

  peek() {
    if (this.size === 0) return null;
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

const minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });
  const queue = new MinHeap((a, b) => a - b);
  let globalMax = 0;
  for (let i = 0; i < intervals.length; i++) {
    let curr = intervals[i];
    let start = curr[0];
    let end = curr[1];
    if (start < queue.peek()) {
      queue.insert(end);
      globalMax = Math.max(queue.size(), globalMax);
    } else {
      while (start >= queue.peek()) {
        queue.extract();
      }
      queue.insert(end);
      globalMax = Math.max(queue.size(), globalMax);
    }
  }
  return globalMax;
};

console.log(
  minMeetingRooms([
    [2, 11],
    [6, 16],
    [11, 16],
  ])
);
