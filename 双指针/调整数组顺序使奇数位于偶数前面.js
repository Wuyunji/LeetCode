/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    while (i < j && nums[j] % 2 === 0) j--
    while (i < j && nums[i] % 2 !== 0) i++
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  return nums
};

let s = exchange([1, 2, 3, 4])
console.log(s);
