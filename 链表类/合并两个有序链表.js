// 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2
  if (list2 === null) return list1
  if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2)
      return list1
  } else {
      list2.next = mergeTwoLists(list1, list2.next)
      return list2
  }
};

let p1 = new ListNode(1)
let p2 = new ListNode(2)
let p3 = new ListNode(4)

let p4 = new ListNode(1)
let p5 = new ListNode(3)
let p6 = new ListNode(4)

let head1 = p1
p1.next = p2
p2.next = p3
p3.next = null

let head2 = p4
p4.next = p5
p5.next = p6
p6.next = null

let s = mergeTwoLists(head1, head2)
console.log(s);
