// 盛最多水的容器
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    max = Math.max((right - left) * Math.min(height[left], height[right]), max)
    height[left] < height[right] ? left++ : right--
  }
  return max
};

let s = maxArea([1, 2])
console.log(s);

