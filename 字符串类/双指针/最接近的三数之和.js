/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let close = Infinity
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(sum - target) < Math.abs(close - target)) close = sum
      if (sum < target) left++
      else if (sum > target) right--
      else return target
    }
  }
  return close
};
