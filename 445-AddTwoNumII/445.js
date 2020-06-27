//i:  (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
//o:  7 -> 8 -> 0 -> 7

//adding from tail node to head node (backwards)
//traverse all the way down each ll

//attempt 1: T: O(n) S: O(n)
//store values in an array

var addTwoNumbers = function (l1, l2) {
  //traverse down each linked list until node.next is null
  //store each node val in an array
  //use longest array as bounds to iterate thru the arrays
  // popping values from each array
  let array1 = [];
  let array2 = [];
  let combinedArr = [];
  const traverse = (ll, array) => {
    while (ll) {
      array.push(ll.val);
      ll = ll.next;
    }
  };
  traverse(l1, array1);
  traverse(l2, array2);
  let bound = array1.length > array2.length ? array1.length : array2.length;
  let carryOver = 0;
  for (let i = 0; i < bound; i++) {
    let val1 = typeof array1[array1.length - 1] === 'number' ? array1.pop() : 0;
    let val2 = typeof array2[array2.length - 1] === 'number' ? array2.pop() : 0;
    let sum = (val1 + val2 + carryOver) % 10;
    combinedArr.unshift(sum);
    carryOver = val1 + val2 + carryOver > 9 ? 1 : 0;
  }
  if (carryOver === 1) {
    combinedArr.unshift(carryOver);
  }
  let newNode = new ListNode(combinedArr.shift());
  let curr = newNode;
  while (combinedArr.length > 0) {
    curr.next = new ListNode(combinedArr.shift());
    curr = curr.next;
  }
  return newNode;
};
