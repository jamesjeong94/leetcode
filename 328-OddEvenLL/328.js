function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var oddEvenList = function (head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  const oddHead = head;
  const evenHead = head.next;
  let count = 1;
  let odd = oddHead;
  let even = evenHead;
  let curr = even.next;
  while (curr) {
    console.log(curr);
    if (count % 2 === 0) {
      even.next = curr;
      even = even.next;
    } else {
      odd.next = curr;
      odd = odd.next;
    }
    count++;
    curr = curr.next;
  }
  even.next = null;
  odd.next = evenHead;
  return oddHead;
};

const test = new ListNode(1);
test.next = new ListNode(2);
test.next.next = new ListNode(3);
// test.next.next.next = new ListNode(4);
// test.next.next.next.next = new ListNode(5);
// test.next.next.next.next.next = new ListNode(6);

console.log(oddEvenList(test));
