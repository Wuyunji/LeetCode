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
  let t = root
  while (true) {
    if (t.val > p.val && t.val > q.val) {
      t = t.left
    } else if (t.val < p.val && t.val < q.val) {
      t = t.right
    } else {
      return t
    }
  }
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

let s = lowestCommonAncestor(root, 1, 1)
console.log(s);
