// 长度最小的子数组
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0
  let right = 0
  let min = Number.MAX_SAFE_INTEGER
  let sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left++];
    }
    right++;
  }
  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};
let s = minSubArrayLen(7, [1, 2, 1, 3, 2, 5, 2])
console.log(s);
