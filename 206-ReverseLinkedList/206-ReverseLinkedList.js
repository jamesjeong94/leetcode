var reverseList = function (head) {
  if (!head) {
    return null;
  }
  let next = null;
  let prev = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let test = new ListNode(1);
test.next = new ListNode(2);
test.next.next = new ListNode(3);
test.next.next.next = new ListNode(4);
test.next.next.next.next = new ListNode(5);

console.log(reverseList(test));
