// 最大子数组和
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = new Array(nums.length).fill(nums[0])
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    max = Math.max(dp[i], max)
  }
  return max
};

let s = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(s);
