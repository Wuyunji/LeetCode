/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length
  function robHouse(arr) {
    let n = arr.length
    let dp = new Array(n).fill(0)
    dp[0] = arr[0]
    if(n === 1) return nums[0]
    dp[1] = Math.max(arr[0], arr[1])
    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1])
    }
    return dp[n - 1]
  }
  return Math.max(robHouse(nums.slice(0, n - 1)), robHouse(nums.slice(1, n)))
};

let s = rob([1, 2, 3])
console.log(s);
