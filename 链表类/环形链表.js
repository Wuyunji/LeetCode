// 环形链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }
  return false
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

let s = hasCycle(head)
console.log(s);
