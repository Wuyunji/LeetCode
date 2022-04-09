// 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function trace(p, q) {
    if(p === null && q === null)  return true
    if(p === null || q === null)  return false
    if(p.val !== q.val) return false
    return trace(p.left, q.right) && trace(p.right, q.left)
  }
  return trace(root, root)
};

let t1 = new TreeNode(1)
let t2 = new TreeNode(2)
let t3 = new TreeNode(2)
let t4 = new TreeNode(4)
let t5 = new TreeNode(4)

t1.left = t2
t1.right = t3
t2.right = t4
t3.left = t5
let root = t1

let s = isSymmetric(root)
console.log(s);
