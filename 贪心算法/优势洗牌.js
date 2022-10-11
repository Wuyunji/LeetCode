// 优势洗牌
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  let ans = new Array(nums1.length);
  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[j] > nums2[i]) {
        ans[i] = nums1.splice(j, 1);
        break;
      }
    }
  }
  for (let i = 0; i < ans.length; i++) {
    if (!ans[i]) {
      ans[i] = nums1.shift();
    }
  }
  return ans;
};

let s = advantageCount([12, 24, 8, 32], [13, 25, 32, 11]);
console.log(s);
