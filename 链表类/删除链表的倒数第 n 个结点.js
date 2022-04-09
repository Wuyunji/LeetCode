// 删除链表的倒数第 n 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head
  let slow = head
  let pre = null
  while (n--) fast = fast.next

  while (fast) {
    pre = slow
    fast = fast.next
    slow = slow.next
  }

  return slow === head ? slow.next : (pre.next = slow.next, head)
};

let p1 = new ListNode(1)
// let p2 = new ListNode(2)                                                                                                                                                                                                                                                                                                                                                                                                              
// let p3 = new ListNode(3)                                                                                                                                                                                                                                                                                                                                                                                                              
// let p4 = new ListNode(4)                                                                                                                                                                                                                                                                                                                                                                                                              
// let p5 = new ListNode(5)
let head = p1
p1.next = null
// p1.next = p2                                                                                                                                                                                                                                                                                                                                                                                                          
// p2.next = p3                                                                                                                                                                                                                                                                                                                                                                                                        
// p3.next = p4                                                                                                                                                                                                                                                                                                                                                                                                          
// p4.next = p5                                                                                                                                                                                                                                                                                                                                                                                  
// p5.next = null                                                                                                                                                                                                                                                                                                                                                                                                   
let s = removeNthFromEnd(head, 1)
console.log(s);
