// 最长递增子序列
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(0)
  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    let max = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(dp[j] + 1, max)
      }
    }
    dp[i] = max
    // console.log(dp);
  }
  return Math.max(...dp)
};
let s = lengthOfLIS([4, 10, 4, 3, 8, 9])
console.log(s);
