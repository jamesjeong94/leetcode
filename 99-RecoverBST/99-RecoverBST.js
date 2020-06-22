var recoverTree = function (root) {
  let problem = [];
  const recurse = (node, parent, pos) => {
    if (node) {
      if (pos === 'left' && node.val >= parent) {
        problem.push(node.val);
      } else if (pos === 'right' && node.val <= parent) {
        problem.push(node.val);
      }
      recurse(node.left, node.val, 'left');
      recurse(node.right, node.val, 'right');
    }
  };
  const traverseFix = (node) => {
    if (node) {
      if (node.val === problem[0]) {
        node.val;
      }
    }
  };
  recurse(root, null, null);
  console.log(problem);
  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const test = new TreeNode(1);
test.left = new TreeNode(3);
test.left.right = new TreeNode(2);

console.log(recoverTree(test));
