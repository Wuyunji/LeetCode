function slidingWindow(arr) {
  let n = arr.length
  let left = 0
  let right = 0
  let sum = 0
  let ans = 0
  while (right < n) {
    // 按条件操作sum
    sum += arr[right]
    while ( undefined /*区间 [left, right] 不符合题意 */ ) {
      // 按条件操作sum
      sum -= nums[left]
      left++
    }
    ans = Math.max(right - left + 1, ans)
    right++
  }
  return ans
}
