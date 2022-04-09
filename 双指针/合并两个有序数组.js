// 合并两个有序数组
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let tail = m + n - 1
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      nums1[tail--] = nums2[p2--]
    } else if (p2 === -1) {
      nums1[tail--] = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      nums1[tail--] = nums1[p1--]
    } else {
      nums1[tail--] = nums2[p2--]
    }
  }
};
let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3
merge(nums1, m, nums2, n)
console.log(nums1);
