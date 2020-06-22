var connect = function (root) {
  const cache = {};
  const helper = (node, depth, isRightmost) => {
    if (node) {
      if (!isRightmost && cache[depth]) {
        node.next = cache[depth];
      }
      cache[depth] = node;
      helper(node.right, depth + 1, isRightmost);
      helper(node.left, depth + 1, false);
    }
  };
  helper(root, 0, true);
  return root;
};
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

const test = new Node(3, 1, 5, null);
