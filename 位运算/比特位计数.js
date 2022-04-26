// 比特位计数
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = [0]
  for (let i = 1; i <= n; i++) {
    arr[i] = arr[i & (i - 1)] + 1
  }
  return arr
};

let s = countBits(18)
console.log(s);
