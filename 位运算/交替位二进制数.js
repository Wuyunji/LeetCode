// 交替位二进制数
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  return (((n ^ (n >> 1)) + 1) & (n ^ (n >> 1))) === 0
};

let s = hasAlternatingBits(5)
console.log(s);
