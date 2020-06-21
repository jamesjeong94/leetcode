var isValidBST = function (root) {
  const traverse = (node, min, max) => {
    console.log(node);
    if (!node) {
      return true;
    }
    if (
      (min !== null && node.right <= min) ||
      (max !== null && node.left >= max)
    ) {
      return false;
    }
    return (
      traverse(node.left, min, node.val) && traverse(node.right, node.val, max)
    );
  };
  return traverse(root, null, null);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let test = new TreeNode(2);
test.left = new TreeNode(1);
test.right = new TreeNode(3);
// console.log(test);
console.log(isValidBST(test));
