/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let len = s.length
  let arr = []
  let temp = []
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(false))
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      dp[i][j] = isLegal(i, j)
    }
  }
  function isLegal(i, j) {
    let str = s.substring(i, j + 1)
    let n = Number(str)
    let regex = /^(0[0-9]+)$|^(00[0-9]+)$/
    return regex.test(str) ? false : (n >= 0 && n <= 255)
  }
  // console.log(dp);
  function backtrace(startIndex) {
    if (temp.length === 4 && temp.join('') === s) {
      arr.push(temp.slice().join('.'))
    }

    for (let j = startIndex; j < len; j++) {
      if (dp[startIndex][j]) {
        temp.push(s.substring(startIndex, j + 1))
        backtrace(j + 1)
        temp.pop()
      }
    }
  }
  backtrace(0)
  return arr
};
let s = restoreIpAddresses("010010")
console.log(s);
