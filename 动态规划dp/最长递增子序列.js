// 最长递增子序列
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length
  let dp = new Array(n).fill(1)
  let max = 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    max = Math.max(dp[i], max)
  }
  return max
};

let s = lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])
console.log(s);
