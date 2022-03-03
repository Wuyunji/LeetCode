/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  if(nums.length === 1) return nums[0]
  if(nums.length === 2) return Math.max(nums[0], nums[1])
  // let dp = [nums[0], Math.max(nums[0], nums[1])]
  let dp1 = nums[0]
  let dp2 = Math.max(nums[0], nums[1])
  let dp
  for(let i = 2; i < nums.length; i++){
    // dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    dp = Math.max(dp1, dp2 + nums[i])
    dp1 = dp2
    dp2 = dp
  }
  return dp
};
let s = rob([0,100,0,100,0])
console.log(s);
