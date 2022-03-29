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
var maxPathSum = function (root) {
  let max = -Infinity
  function trace(root) {
    if (root === null) return 0
    let L = Math.max(trace(root.left), 0)
    let R = Math.max(trace(root.right), 0)
    max = Math.max(max, root.val + L + R);
    return root.val + Math.max(L, R);
  }
  trace(root)
  return max
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

let s = maxPathSum(root)
console.log(s);
