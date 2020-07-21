var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  const createTree = (values) => {
    if (values.length === 1) {
      preorder.shift();
      return new TreeNode(values[0]);
    } else if (values.length === 0) {
      return null;
    } else if (values.length > 1) {
      let val = preorder.shift();
      let head = new TreeNode(val);
      let index = values.indexOf(val);
      let leftBTValues = values.slice(0, index);
      let rightBTValues = values.slice(index + 1);
      head.left = createTree(leftBTValues);
      head.right = createTree(rightBTValues);
      return head;
    }
  };
  return createTree(inorder);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
