// 0～n-1中缺失的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let i = 0;
  let j = nums.length - 1
  while (i <= j) {
    let k = Math.floor((i + j) / 2)
    if (nums[k] <= k) {
      i = k + 1
    } else {
      j = k - 1
    }
  }
  return i
};

let s = missingNumber([1])
console.log(s);
