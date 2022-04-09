// 反转链表II
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let p = head
  while (p) {
    let list = new Node(p.val)
    list.next = p.next
    p.next = list
    p = p.next.next
  }

  p = head
  while (p) {
    if(p.next)  p.next.random = p.random.next
    p = p.next.next
  }

  p = head
  let temp = new Node()
  let pre = temp
  while (p) {
    let cur = p.next
    pre.next = cur
    pre = pre.next
    p.next = cur.next
    p = p.next
  }

  return temp.next
};
let p1 = new Node(1)
let p2 = new Node(2)
let p3 = new Node(3)
let p4 = new Node(4)
let p5 = new Node(5)

let head = p1
p1.next = p2
p2.next = p3
p3.next = p4
p4.next = p5
p5.next = null

p1.random = null
p2.random = p1
p3.random = p5
p4.random = p3
p5.random = p1

let s = copyRandomList(head)
console.log(s);
