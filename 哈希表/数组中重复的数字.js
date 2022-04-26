// 数组中重复的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let set = new Set()
  for (let n of nums) {
    if(set.has(n))  return n
    set.add(n)
  }
};

let s = findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
console.log(s);

