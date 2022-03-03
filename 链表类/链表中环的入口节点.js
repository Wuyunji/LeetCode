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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = head
  let fast = head
  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
    if(fast === slow){
      fast = head
      while(fast !== slow){
        fast = fast.next
        slow = slow.next
      }
      return fast
    }
  }
  return null
};
let p1 = new ListNode(3)
let p2 = new ListNode(2)
let p3 = new ListNode(0)
let p4 = new ListNode(-4)

let head = p1
p1.next = p2
p2.next = p3
p3.next = p4
p4.next = p2

let s = detectCycle(head)
console.log(s);
