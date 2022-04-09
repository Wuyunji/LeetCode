// 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2
  if (root2 === null) return root1
  root1.val += root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  return root1
};

let t1 = new TreeNode(3)
let t2 = new TreeNode(1)
let t3 = new TreeNode(5)
let t4 = new TreeNode(2)
let t5 = new TreeNode(4)

let t6 = new TreeNode(6)
let t7 = new TreeNode(7)
let t8 = new TreeNode(8)

t1.left = t2
t1.right = t3
t2.right = t4
t3.left = t5
let root1 = t1

t6.left = t7
t6.right = t8
let root2 = t6

let s = mergeTrees(root1, root2)
console.log(s);
