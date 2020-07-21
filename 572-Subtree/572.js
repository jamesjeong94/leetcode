/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  //set currSub = t
  //set curr = s
  //iterate through all nodes in s
  // make comparison between current s node and currSub node
  // if equal, traverse down currSub
  const isEqual = (node, sub) => {
    if (!sub && !node) {
      return true;
    }
    if (!sub || !node || node.val !== sub.val) {
      return false;
    }
    return isEqual(node.left, sub.left) && isEqual(node.right, sub.right);
  };
  const traverse = (node) => {
    if (!node) {
      return false;
    }
    if (node.val === t.val && isEqual(node, t)) {
      return true;
    }
    return traverse(node.left) || traverse(node.right);
  };
  return traverse(s);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let s = new TreeNode(1, 1, 0);
let t = new TreeNode(1);

console.log(isSubtree(s, t));
