/** Problem 2
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 === undefined || l2 === undefined)
    return l1 || l2;

  var sum = l1.val + l2.val;
  var plus = Math.floor(sum / 10);
  var l3 = new ListNode(sum % 10);

  var cur1 = l1.next,
    cur2 = l2.next,
    cur3 = l3;
  while (cur1 && cur2) {
    cur3.next = new ListNode(0);
    cur3 = cur3.next;
    sum = cur1.val + cur2.val + plus;
    plus = Math.floor(sum / 10);
    cur3.val = sum % 10;
    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  while (cur1) {
    cur3.next = new ListNode(0);
    cur3 = cur3.next;
    sum = cur1.val + plus;
    plus = Math.floor(sum / 10);
    cur3.val = sum % 10;
    cur1 = cur1.next;
  }

  while (cur2) {
    cur3.next = new ListNode(0);
    cur3 = cur3.next;
    sum = cur2.val + plus;
    plus = Math.floor(sum / 10);
    cur3.val = sum % 10;
    cur2 = cur2.next;
  }

  if (plus !== 0) {
    cur3.next = new ListNode(plus);
  }

  return l3;
};