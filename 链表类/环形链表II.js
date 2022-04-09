// 环形链表II
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null || head.next === null) return null

  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) break
  }
  if (fast === null || fast.next === null) return null

  fast = head
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
};
let p1 = new ListNode(1)
let p2 = new ListNode(2)
let p3 = new ListNode(3)
let p4 = new ListNode(4)
let p5 = new ListNode(5)

let head = p1
p1.next = p2
p2.next = p3
p3.next = p4
p4.next = p2

let s = detectCycle(head)
console.log(s);
