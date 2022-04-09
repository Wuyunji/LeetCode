// 括号生成
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let arr = []
  let temp = []
  function backtrace(L, R) {
    if (temp.length === 2 * n) {
      arr.push(temp.slice().join(''))
    }
    if (L > 0) {
      temp.push('(')
      backtrace(L - 1, R)
    }
    if (L < R) {
      temp.push(')')
      backtrace(L, R - 1)
    }
    temp.pop()
  }
  backtrace(n, n)
  return arr
};
let s = generateParenthesis(3)
console.log(s);
