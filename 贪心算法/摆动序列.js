// 摆动序列
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let n = nums.length
  if (n === 1) return 1

  let dec = nums[1] - nums[0]
  let ans = dec === 0 ? 1 : 2
  for (let i = 2; i < n; i++) {
    let diff = nums[i] - nums[i - 1]
    if ((dec <= 0 && diff > 0) || (dec >= 0 && diff < 0)) {
      ans++
      dec = diff
    }
  }
  return ans
};

let s = wiggleMaxLength([3, 3, 3, 2, 5])
console.log(s);
