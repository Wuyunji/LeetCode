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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) return []
  let arr = []
  let queue = []
  let temp = []
  let flag = true
  function visit(root) {
    if (flag) {
      temp.push(root.val)
    } else {
      temp.unshift(root.val)
    }
  }
  queue.push(root)
  while (queue.length) {
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let t = queue.shift()
      visit(t)
      if (t.left) queue.push(t.left)
      if (t.right) queue.push(t.right)
    }
    arr.push(temp)
    temp = []
    flag = !flag
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

let s = zigzagLevelOrder(root)
console.log(s);
