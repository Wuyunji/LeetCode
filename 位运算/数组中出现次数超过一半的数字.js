// 数组中出现次数超过一半的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let maj = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    count === 0 ? (maj = nums[i], count++) : (nums[i] === maj ? count++ : count--)
  }
  return maj
};
let s = majorityElement([3,3,4,4,3,3,3,4,4,5,6,7,7,2,1])//443636766666
console.log(s);
