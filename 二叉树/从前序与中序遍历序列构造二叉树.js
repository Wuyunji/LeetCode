// 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let root = new TreeNode(preorder[0])
  if (preorder.length === 0 || inorder.length === 0) return null
  let index = inorder.indexOf(preorder.shift())
  root.left = buildTree(preorder, inorder.slice(0, index))
  root.right = buildTree(preorder, inorder.slice(index + 1))
  return root
};

let s = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
console.log(s);
