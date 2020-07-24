// class MinHeap {
//   constructor(compareFunc) {
//     this.compareFunc = compareFunc;
//     this.heap = [];
//   }

//   insert(val) {
//     this.heap.unshift(val);
//     this.heap.sort(this.compareFunc);
//   }

//   extract() {
//     if (this.size === 0) return null;
//     return this.heap.shift();
//   }

//   peek() {
//     if (this.size === 0) return null;
//     return this.heap[0];
//   }

//   size() {
//     return this.heap.length;
//   }
// }

// const minMeetingRooms = function (intervals) {
//   intervals.sort((a, b) => {
//     if (a[0] === b[0]) {
//       return b[1] - a[1];
//     }
//     return a[0] - b[0];
//   });
//   const queue = new MinHeap((a, b) => a - b);
//   let globalMax = 0;
//   for (let i = 0; i < intervals.length; i++) {
//     let curr = intervals[i];
//     let start = curr[0];
//     let end = curr[1];
//     if (start < queue.peek()) {
//       queue.insert(end);
//       globalMax = Math.max(queue.size(), globalMax);
//     } else {
//       while (start >= queue.peek()) {
//         queue.extract();
//       }
//       queue.insert(end);
//       globalMax = Math.max(queue.size(), globalMax);
//     }
//   }
//   return globalMax;
// };

var minMeetingRooms = function (intervals) {
  if (intervals.length === 0) {
    return 0;
  }
  const startTimes = intervals.map((a) => a[0]).sort((a, b) => a - b);
  const endTimes = intervals.map((a) => a[1]).sort((a, b) => a - b);
  let startPointer = 0;
  let endPointer = 0;
  let globalMax = 1;
  while (startPointer < startTimes.length) {
    console.log(startPointer, endPointer);
    if (startTimes[startPointer] < endTimes[endPointer]) {
      startPointer++;
    } else {
      endPointer++;
    }
    globalMax =
      startPointer - endPointer > globalMax
        ? startPointer - endPointer
        : globalMax;
  }
  return globalMax;
};

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
