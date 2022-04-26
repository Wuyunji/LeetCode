// 接雨水
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let sum = 0
  for (let i = 1; i < height.length - 1; i++) {
    // let l = Math.max(...height.slice(0, i))
    // let r = Math.max(...height.slice(i + 1, height.length))
    let lmax = 0
    let rmax = 0
    for (let j = i - 1; j >= 0; j--) {
      if (height[j] > lmax) lmax = height[j]
    }
    for (let j = i + 1; j < height.length; j++) {
      if (height[j] > rmax) rmax = height[j]
    }
    if (lmax >= height[i] && rmax >= height[i]) {
      sum += (lmax < rmax ? lmax : rmax) - height[i]
    }
  }
  return sum
};

let s = trap([4, 2, 0, 3, 2, 5])
console.log(s);
