/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let arr = nums.sort((a, b) => b - a)
  return arr[k - 1]
};
let s = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
console.log(s);
