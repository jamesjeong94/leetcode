function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

var copyRandomList = function (head) {
  let curr = head;
  let copy = new Node(head.val);
  let currCopy = copy;
  while (curr) {
    currCopy.random = curr.random;
    currCopy = new Node(curr.val);
    curr = curr.next;
  }
  return copy;
};
