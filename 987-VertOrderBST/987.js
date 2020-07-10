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
var verticalTraversal = function (root) {
  const horizontalOrder = {};
  const queue = [[root, 0, 0]];
  while (queue.length > 0) {
    let current = queue.shift();
    let node = current[0];
    let offset = current[1];
    let depth = current[2];
    if (horizontalOrder[offset]) {
      horizontalOrder[offset].push({ val: node.val, depth });
    } else {
      horizontalOrder[offset] = [{ val: node.val, depth }];
    }
    if (node.left) {
      queue.push([node.left, offset - 1, depth + 1]);
    }
    if (node.right) {
      queue.push([node.right, offset + 1, depth + 1]);
    }
  }
  return Object.keys(horizontalOrder)
    .sort((a, b) => {
      return Number(a) - Number(b);
    })
    .map((key) => {
      let cache = [];
      let sameVertValues = horizontalOrder[key];
      sameVertValues
        .sort((a, b) => {
          if (a.depth === b.depth) {
            return a.val - b.val;
          }
        })
        .forEach((val) => {
          cache.push(val.val);
        });
      return cache;
    });
};
