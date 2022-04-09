// 搜索旋转排序数组
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
    let mid = i + ((j - i) >> 1)
    if (nums[mid] === target) return mid
    if (nums[mid] >= nums[i]) {
      if (target >= nums[i] && target < nums[mid]) {
        j = mid - 1
      } else {
        i = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[j]) {
        i = mid + 1
      } else {
        j = mid - 1
      }
    }
  }
  return -1
};
let s = search([4, 5, 6, 7, 0, 1, 2], 1)
console.log(s);
