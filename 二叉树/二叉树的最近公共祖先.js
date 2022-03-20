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
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null
  if (root === q || root === p) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) return root
  if (left && !right) return left
  if (!left && right) return right
  return null
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

let s = lowestCommonAncestor(root, t2, t5)
console.log(s);
