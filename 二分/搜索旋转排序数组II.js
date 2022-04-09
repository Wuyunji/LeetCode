// 搜索旋转排序数组II
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
    if (nums[mid] === target) return true
    if (nums[mid] === nums[i]) {
      i++
      continue
    }
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
  return false
};
let s = search([2, 5, 6, 0, 0, 1, 2], 1)
console.log(s);
