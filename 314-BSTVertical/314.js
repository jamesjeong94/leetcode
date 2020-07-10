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
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  const horizontalOrder = {};
  const queue = [[root, 0]];
  if (!root) {
    return [];
  }
  while (queue.length > 0) {
    let current = queue.shift();
    let node = current[0];
    let offset = current[1];
    if (horizontalOrder[offset]) {
      horizontalOrder[offset].push(node.val);
    } else {
      horizontalOrder[offset] = [node.val];
    }
    if (node.left) {
      queue.push([node.left, offset - 1]);
    }
    if (node.right) {
      queue.push([node.right, offset + 1]);
    }
  }
  return Object.keys(horizontalOrder)
    .sort((a, b) => {
      return Number(a) - Number(b);
    })
    .map((key) => {
      let sameVertValues = horizontalOrder[key];
      return sameVertValues;
    });
};
