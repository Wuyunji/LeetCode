// 分割回文串
/**
 * @param {string} s
 * @return {string[][]}
*/
var partition = function (s) {
  let arr = []
  let temp = []
  let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(true))
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      dp[i][j] = isLegal(i, j)
    }
  }
  // console.log(dp);
  function isLegal(i, j) {
    let str1 = s.split('').slice(i, j + 1).join('')
    let str2 = s.split('').slice(i, j + 1).reverse().join('')
    return str1 === str2
  }

  function backtrace(startIndex) {
    if (startIndex === s.length) {
      arr.push(temp.slice());
    }
    for (let j = startIndex; j < s.length; j++) {
      if (dp[startIndex][j]) {
        temp.push(s.slice(startIndex, j + 1));
        backtrace(j + 1);
        temp.pop();
      }
    }
  }
  backtrace(0)
  return arr
};

let s = partition("aabbaa")
console.log(s);
