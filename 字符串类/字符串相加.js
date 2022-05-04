// 字符串相加 大数相加
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let arr = []
  let s1 = num1.length
  let s2 = num2.length
  s1 < s2 ? num1 = '0'.repeat(s2 - s1) + num1 : num2 = '0'.repeat(s1 - s2) + num2

  let flag = 0
  for (let i = num1.length - 1; i >= 0; i--) {
    let sum = (num1[i] - '0') + (num2[i] - '0') + flag
    sum > 9 ? (sum %= 10, flag = 1) : flag = 0
    arr.unshift(sum)
  }
  if (flag) arr.unshift(1)

  return arr.join('')
};

let s = addStrings('444', '77')
console.log(s);
