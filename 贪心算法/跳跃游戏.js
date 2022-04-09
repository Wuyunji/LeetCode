// 跳跃游戏
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let far = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > far) return false
    far = Math.max(i + nums[i], far)
  }
  return true
};
let s = canJump([3, 2, 1, 0, 4])
console.log(s);
