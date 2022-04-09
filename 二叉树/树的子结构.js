// 树的子结构
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  function isSub(A, B) {
    if (B === null) return true
    if (A === null) return false
    if (A.val !== B.val) return false
    return isSub(A.left, B.left) && isSub(A.right, B.right)
  }
  function trace(A, B) {
    if (A === null || B === null) return false
    if (A.val === B.val && isSub(A.left, B.left) && isSub(A.right, B.right)) return true
    return trace(A.left, B) || trace(A.right, B)
  }
  return trace(A, B)
};

let t1 = new TreeNode(3)
let t2 = new TreeNode(1)
let t3 = new TreeNode(5)
let t4 = new TreeNode(2)
let t5 = new TreeNode(4)

let t6 = new TreeNode(3)
let t7 = new TreeNode(5)
let t8 = new TreeNode(4)

t1.left = t2
t1.right = t3
t2.right = t4
t3.left = t5
let root1 = t1

t6.right = t7
t7.left = t8
let root2 = t6

let s = isSubStructure(root1, root2)
console.log(s);
