const flatten = (head) => {
  let stack = [];
  const traverse = (node) => {
    if (node) {
      let next = node.next;
      if (node.child) {
        stack.push(next);
        node.next = node.child;
        node.next.prev = node;
        node.child = null;
        traverse(node.next);
      }
      if (node.next === null) {
        if (stack.length > 0) {
          let tail = stack.pop();
          if (tail) {
            node.next = tail;
            tail.prev = node;
            traverse(tail);
          }
        }
      } else {
        traverse(next);
      }
    }
  };
  traverse(head);
  return head;
};
