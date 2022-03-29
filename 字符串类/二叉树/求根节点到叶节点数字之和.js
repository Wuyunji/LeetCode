/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let arr = []
  let temp = 0
  function visit(root) {
    temp = temp * 10 + root.val
    if (root.left === null && root.right === null) {
      arr.push(temp)
    }
  }
  function trace(root) {
    if (root === null) return
    visit(root)
    trace(root.left)
    trace(root.right)
    temp = (temp - root.val) / 10
  }
  trace(root)
  return arr.reduce((sum, num) => sum + num)
};

let t1 = new TreeNode(1)
let t2 = new TreeNode(2)
let t3 = new TreeNode(3)
let t4 = new TreeNode(4)
let t5 = new TreeNode(5)

t1.left = t2
t1.right = t3
t2.right = t4
t3.left = t5
let root = t1

let s = sumNumbers(root)
console.log(s);
