// 路径总和III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let count = 0
  function trace(node, targetSum, isFirst) {
    if (node === null) return
    if (node.val === targetSum) count++
    trace(node.left, targetSum - node.val, false)
    trace(node.right, targetSum - node.val, false)
    if (isFirst) {
      trace(node.left, targetSum, true)
      trace(node.right, targetSum, true)
    }
  }
  trace(root, targetSum, true)
  return count
};

let t1 = new TreeNode(0)
let t2 = new TreeNode(0)
let t3 = new TreeNode(0)
let t4 = new TreeNode(0)
let t5 = new TreeNode(0)

t1.left = t2
t1.right = t3
t2.right = t4
t3.left = t5
let root = t1

let s = pathSum(root, 0)
console.log(s);
