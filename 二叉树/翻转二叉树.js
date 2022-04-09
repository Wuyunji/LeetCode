// 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return null
  let t = root.left
  root.left = root.right
  root.right = t
  invertTree(root.left)
  invertTree(root.right)
  return root
};

let t1 = new TreeNode(3)
let t2 = new TreeNode(1)
let t3 = new TreeNode(5)
let t4 = new TreeNode(2)
let t5 = new TreeNode(4)

t1.left = t2
t1.right = t3
t2.right = t4
t3.left = t5
let root = t1

let s = invertTree(root)
console.log(s);
