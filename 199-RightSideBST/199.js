/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const rightMost = [];
  const traverse = (node, isRight) => {
    if (isRight === true) {
      rightMost.push(node.val);
    }
    if (node.right) {
      traverse(node.right, isRight);
      if (node.left) {
        traverse(node.left, false);
      }
    } else {
      if (node.left) {
        traverse(node.left, isRight);
      }
    }
  };
  traverse(root, true);
  return rightMost;
};
