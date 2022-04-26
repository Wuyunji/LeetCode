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
  function trace(root) {
    if (root === null) return
    trace(root.left)
    arr.push(root.val)
    trace(root.right)
  }
  trace(root)
  return arr[k - 1]

  // 非递归
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

let t1 = new TreeNode(1)
let t2 = new TreeNode(2)
let t3 = new TreeNode(3)
let t4 = new TreeNode(4)

t3.left = t1
t3.right = t4
t1.right = t2
let root = t3

let s = kthSmallest(root, 2)
console.log(s);
