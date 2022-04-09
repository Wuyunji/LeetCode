// 电话号码的字母组合
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if(digits === "") return []
  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  let arr = []
  let temp = []
  function backtrace(startIndex) {
    if (startIndex === digits.length) {
      arr.push(temp.join(''))
      return
    }
    let digit = map[digits[startIndex]]
    for (let i = 0; i < digit.length; i++) {
      temp.push(digit[i])
      backtrace(startIndex + 1)
      temp.pop()
    }
  }
  backtrace(0)
  return arr
};
let s = letterCombinations("23")
console.log(s);

