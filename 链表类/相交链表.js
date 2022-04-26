// 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p = headA
  let q = headB
  while (p !== q) {
    p = p ? p.next : headB
    q = q ? q.next : headA
  }
  return p
};


let p1 = new ListNode(1)
let p2 = new ListNode(2)
let p3 = new ListNode(3)
let p4 = new ListNode(4)
let p5 = new ListNode(5)
let p6 = new ListNode(6)

let p7 = new ListNode(2)
let p8 = new ListNode(3)

let head1 = p1
p1.next = p2
p2.next = p3
p3.next = p4
p4.next = p5
p5.next = p6
p6.next = null

let head2 = p7
p7.next = p8
p8.next = p4

let s = getIntersectionNode(head1, head2)
console.log(s);
