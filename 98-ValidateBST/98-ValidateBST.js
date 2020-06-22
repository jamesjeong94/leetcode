var isValidBST = function (root) {
  const traverse = (node, lower, upper) => {
    if (node) {
      if (node.val >= upper || node.val <= lower) {
        return false;
      }
      return (
        traverse(node.left, lower, node.val) &&
        traverse(node.right, node.val, upper)
      );
    }
    return true;
  };
  return traverse(root, -Infinity, Infinity);
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
