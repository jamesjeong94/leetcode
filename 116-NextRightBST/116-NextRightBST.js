var connect = function (root) {
  const cache = {};
  const helper = (node, isRightMost, depth) => {
    if (node) {
      console.log(depth);
      if (!isRightMost && cache.hasOwnProperty(depth)) {
        node.next = cache[depth];
      }
      cache[depth] = node;
      console.log(cache);
      helper(node.right, isRightMost, depth + 1);
      helper(node.left, false, depth + 1);
    }
  };
  helper(root, false, 0);
  return root;
};

// var connect = function(root) {
//   if (root == null || root.left == null) return root;
//   root.left.next = root.right;
//   root.right.next = root.next ? root.next.left:null;
//   connect(root.left);
//   connect(root.right);
//   return root;
// }
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

//[-1,2,-3,-5,2,0,-4]
const test = new Node(-1);
test.left = new Node(2);
test.right = new Node(-3);
test.left.left = new Node(-5);
test.left.right = new Node(2);
test.right.left = new Node(0);
test.right.right = new Node(-4);

console.log(connect(test));
