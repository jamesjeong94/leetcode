/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let prev = { next: head };
  for (let i = 0; i < m - 1; i++) {
    prev = prev.next;
  }
  let curr = prev.next;
  for (let i = 0; i < n - m; ++i) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  return head;
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

console.log(reverseBetween(test, 2, 4));
