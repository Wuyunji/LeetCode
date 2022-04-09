// 二进制求和
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = '0b' + a;
  b = '0b' + b;
  let sum = BigInt(a) + BigInt(b);
  return sum.toString(2);
};

let s = addBinary("1010", "1011")
console.log(s);
