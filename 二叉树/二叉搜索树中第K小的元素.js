// 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let arr = []
  function visit(root) {
    arr.push(root.val)
  }
  function trace(root) {
    if (root === null) return
    trace(root.left)
    visit(root)
    trace(root.right)
  }
  trace(root)
  return arr[k - 1]
  // let stack = []
  // let t = root
  // while (t !== null || stack.length) {
  //   while (t) {
  //     stack.push(t)
  //     t = t.left
  //   }
  //   t = stack.pop()
  //   if (--k === 0) return t.val
  //   t = t.right
  // }
  // return null
};

let t1 = new TreeNode(3)

let root = t1

let s = kthSmallest(root, 1)
console.log(s);
