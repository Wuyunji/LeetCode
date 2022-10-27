// 反转链表II
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let root = new ListNode(0)
  root.next = head

  let pre = root
  for (let i = 1; i < left; i++) {
    pre = pre.next
  }

  let cur = pre.next
  for (let i = 0; i < right - left; i++) {
    let nex = cur.next
    cur.next = nex.next
    nex.next = pre.next
    pre.next = nex
  }

  return root.next
};

let p1 = new ListNode(1)
let p2 = new ListNode(2)
let p3 = new ListNode(3)
let p4 = new ListNode(4)
let p5 = new ListNode(5)
let p6 = new ListNode(6)

let head = p1
p1.next = p2
p2.next = p3
p3.next = p4
p4.next = p5
p5.next = p6
p6.next = null
let s = reverseBetween(head, 2,4)
console.log(s);
