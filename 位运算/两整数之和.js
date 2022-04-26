// 两整数之和
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b) {
    let ci = (a & b) << 1
    a = a ^ b
    b = ci
  }
  return a
};

let s = getSum(1, 3)
console.log(s);

// 001
// 011
// 010 001

// 010
// 010
// 000 010

// 000
// 100
// 100 000


