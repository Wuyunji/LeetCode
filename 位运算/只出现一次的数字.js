/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((n, num) => n ^ num)
};
let s = singleNumber([4, 1, 2, 1, 2])
console.log(s);
