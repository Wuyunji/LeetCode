// 最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let str = ''
  for (let j = 0; strs[0][j] !== undefined; j++) {
    let ch = strs[0][j]
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][j] !== ch) return str
    }
    str += ch
  }
  return str
};

let s = longestCommonPrefix(["flower", "flow", "flight"])
console.log(s);
