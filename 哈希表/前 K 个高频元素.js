// 前 K 个高频元素
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let arr = []
  let values = []
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  for (let [key, value] of map) {
    values.push(value)
  }
  values.sort((a, b) => b - a)
  values = values.slice(0,k);
  for (let [key, value] of map) {
    if (values.indexOf(value) !== -1) {
      arr.push(key)
    }
  }
  return arr
};
let s = topKFrequent([1,1,1,2,2,3], 2)
console.log(s);
