// 旋转数组的最小数字
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    let k = Math.floor((i + j) / 2)
    if (numbers[k] < numbers[j]) {
      j = k
    } else if (numbers[k] > numbers[j]) {
      i = k + 1
    } else {
      j = j - 1
    }
  }
  return numbers[i]
};

let s = minArray([1, 2])
console.log(s);
