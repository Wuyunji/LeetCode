/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let n = nums.length
  let left = 0
  let right = 0
  let sum = 0
  let ans = 0
  while (right < n) {
    if (nums[right] === 0) {
      sum++
    }
    while (sum > k) {
      if (nums[left] === 0) {
        sum--
      }
      left++
    }
    ans = Math.max(right - left + 1, ans)
    right++
  }
  return ans
};

let s = longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
console.log(s);
