/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let arr = []
  if (nums.length < 3) return arr
  nums.sort((a, b) => a - b)
  // console.log(arr);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return arr
    if (i !== 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        arr.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;
        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return arr
};
let s = threeSum([-1, 0, 1, 2, -1, -4])
console.log(s);

