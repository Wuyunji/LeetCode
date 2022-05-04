// 字符串压缩
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let newS = ''
  let last = S[0]
  let count = 0
  for (let c of S) {
    if (c === last) {
      count++
    } else {
      newS += `${last}${count}`
      last = c
      count = 1
    }
  }
  newS += `${last}${count}`
  return newS.length < S.length ? newS : S
};

let s = compressString("aabcccccaaa")
console.log(s);
