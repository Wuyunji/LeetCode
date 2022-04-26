// 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true

  let fast = head
  let slow = head
  let pre = null
  while (fast && fast.next) {
    pre = slow
    slow = slow.next
    fast = fast.next.next
  }
  pre.next = null

  let head2 = null
  while (slow) {
    let tmp = slow.next
    slow.next = head2
    head2 = slow
    slow = tmp
  }

  while (head && head2) {
    if (head.val != head2.val) return false
    head = head.next
    head2 = head2.next
  }
  return true

  // let fast = head
  // let slow = head
  // let pre = null
  // let nex = slow.next
  // while(fast && fast.next){
  //   fast = fast.next.next
  //   slow.next = pre
  //   pre = slow
  //   slow = nex
  //   nex = nex.next  
  // }

  // if(fast === null){
  //   while(pre && slow){
  //     if(pre.val !== slow.val)  return false
  //     pre = pre.next
  //     slow = slow.next
  //   }
  // }else{
  //   while(pre && nex){
  //     if(pre.val !== nex.val)  return false
  //     pre = pre.next
  //     nex = nex.next
  //   }
  // }
  // return true
};

let p1 = new ListNode(1)
let p2 = new ListNode(2)
let p3 = new ListNode(3)
let p4 = new ListNode(3)
let p5 = new ListNode(2)
let p6 = new ListNode(1)

let head = p1
p1.next = p2
p2.next = p3
p3.next = p4
p4.next = p5
p5.next = p6
p6.next = null
let s = isPalindrome(head)
console.log(s);
