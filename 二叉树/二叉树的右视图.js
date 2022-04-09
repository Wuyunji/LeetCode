// 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return []
  let arr = []
  let queue = []

  queue.push(root)
  while (queue.length > 0) {
    let n = queue.length
    let temp = queue[queue.length - 1]
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    arr.push(temp.val)
  }

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

let s = rightSideView(root)
console.log(s);
