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

// var kthSmallest = function (root, k) {
//   let minHeap = new MinHeap((a, b) => a - b);

//   const traverse = (node) => {
//     if (!node) {
//       return;
//     }
//     minHeap.insert(node.val);
//     traverse(node.left);
//     traverse(node.right);
//   };
//   traverse(root);
//   let kthSmallestValue = 0;
//   for (let i = 0; i < k; i++) {
//     kthSmallestValue = minHeap.extract();
//   }
//   return kthSmallestValue;
// };

const kthSmallest = (root, k) => {
  let stack = [];
  let node = root;
  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();

    if (--k === 0) {
      return node.val;
    }

    node = node.right;
  }
};
