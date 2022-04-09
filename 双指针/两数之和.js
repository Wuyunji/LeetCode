// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length; j++) {
  //     if (i !== j && nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
};
let s = twoSum([4, 6, 2, 7, 11, 15, 1], 9)
console.log(s);

