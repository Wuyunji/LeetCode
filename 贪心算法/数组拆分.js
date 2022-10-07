// 数组拆分
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((pre, cur, index) => {
      if (index % 2 === 0) {
        return pre + cur;
      }
      return pre;
    }, 0);
};

let s = arrayPairSum([3, 2, 1, 4]);
console.log(s);
