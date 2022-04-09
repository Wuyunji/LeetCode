// 路径总和II
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
 * @return {boolean}
 */
var pathSum = function (root, targetSum) {
  let arr = []
  let temp = []
  function traceback(root, sum) {
    if (root === null) return
    temp.push(root.val)
    sum += root.val
    if (root.left === null && root.right === null && sum === targetSum) {
      arr.push([...temp])
    }
    traceback(root.left, sum)
    traceback(root.right, sum)
    temp.pop()
  }
  traceback(root, 0)
  return arr
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

let s = pathSum(root, 7)
console.log(s);
