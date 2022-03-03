/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 1) return nums.slice()
  let arr = []
  let queue = []
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.shift()
    }
    queue.push(i)
    while (queue[0] <= i - k) {
      queue.shift()
    }
    if (i >= k - 1) arr.push(nums[queue[0]])
  }
  return arr
};
let s = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 2)
console.log(s);

