function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
  let head = new ListNode();
  let temp = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      temp.next = l2;
      // console.log(result);
      l2 = l2.next;
    } else {
      temp.next = l1;
      l1 = l1.next;
    }
    temp = temp.next;
  }
  temp.next = l1 ? l1 : l2;
  return head.next;
};

const test1 = new ListNode(1);
test1.next = new ListNode(3);
test1.next.next = new ListNode(5);

const test2 = new ListNode(2);
test2.next = new ListNode(4);
test2.next.next = new ListNode(6);

console.log(mergeTwoLists(test1, test2));
