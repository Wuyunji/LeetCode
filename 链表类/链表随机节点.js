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
 */
var Solution = function (head) {
  this.head = head
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let ans = 0
  for (let i = 1, p = this.head; p !== null; i++, p = p.next) {
    if (Math.floor(Math.random() * i) === 0) {
      ans = p.val;
    }
  }
  return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
var obj = new Solution([[[1, 2, 3]], [], [], [], [], []])
var param_1 = obj.getRandom()
console.log(param_1);

