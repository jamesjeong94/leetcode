function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const addTwoNumbers = (a, b) => {
  let ans = new ListNode(),
    head = ans,
    carry = 0;
  for (;;) {
    head.val = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(head.val / 10);
    head.val %= 10;
    a = a ? a.next : null;
    b = b ? b.next : null;
    if (!a && !b && !carry) break;
    head = head.next = new ListNode();
  }
  return ans;
};
