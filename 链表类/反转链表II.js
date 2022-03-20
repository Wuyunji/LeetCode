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
var reverseBetween = function (head, left, right) {//有bug
  let node = new ListNode(0, head)

  let A = node
  for (let i = 0; i < left - 1; i++) {
    A = A.next
  }

  let rightNode = A
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next
  }

  let leftNode = A.next
  let B = rightNode.next

  A.next = null
  rightNode.next = null

  reverseList(leftNode)

  A.next = rightNode
  leftNode.next = B

  function reverseList(head) {
    let pre = null
    let cur = head
    let nex = null
    while (cur) {
      nex = cur.next
      cur.next = pre
      pre = cur
      cur = nex
    }
    return pre
  }

  return head

  // let root = new ListNode(0)
  // root.next = head

  // let pre = root
  // for (let i = 1; i < left; i++) {
  //   pre = pre.next
  // }

  // let cur = pre.next
  // for (let i = 0; i < right - left; i++) {
  //   let nex = cur.next
  //   cur.next = nex.next
  //   nex.next = pre.next
  //   pre.next = nex
  // }

  // return root.next
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
let s = reverseBetween(head)
console.log(s);
