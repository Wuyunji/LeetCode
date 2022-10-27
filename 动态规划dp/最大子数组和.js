// 最大子数组和
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let n = nums.length
  let max = nums[0]
  let dp = new Array(n).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    max = Math.max(dp[i], max)
  }
  return max
};

let s = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(s);

// 如需要输出子数组那么用下面的方法
// var maxSubArray = function (nums) {
//   let pre = nums[0];
//   let max = nums[0];
//   let start = 0;
//   let end = 1;
//   let left = 0;
//   let right = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (pre <= 0) {
//       pre = nums[i];
//       left = i;
//       right = i + 1;
//     } else {
//       pre += nums[i];
//       right = i + 1;
//     }
//     if (pre > max) {
//       max = pre;
//       start = left;
//       end = right;
//     }
//   }
//   return [max, nums.slice(start, end)];
// };
