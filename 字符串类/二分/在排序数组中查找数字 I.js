/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  function binarySearch(target) {
    let i = 0
    let j = nums.length - 1
    while (i <= j) {
      let k = Math.floor((i + j) / 2)
      if (nums[k] <= target) {
        i = k + 1
      } else {
        j = k - 1
      }
    }
    return i
  }
  return binarySearch(target) - binarySearch(target - 1)
};
let s = search([5, 7, 7, 8, 8, 10], 8)
console.log(s);
