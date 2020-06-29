var levelOrder = function (root) {
  const levelOrderValues = [];
  const levelOrderTraverse = (node, depth) => {
    if (node) {
      if (levelOrderValues[depth] !== undefined) {
        levelOrderValues[depth].push(node.val);
      } else {
        levelOrderValues[depth] = [node.val];
      }
      levelOrderTraverse(node.left, depth + 1);
      levelOrderTraverse(node.right, depth + 1);
    }
  };
  levelOrderTraverse(root, 0);
  return levelOrderValues;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const test = new TreeNode(1);
test.left = new TreeNode(2);
test.right = new TreeNode(3);
test.right.left = new TreeNode(4);
test.right.right = new TreeNode(5);

console.log(levelOrder(test));
