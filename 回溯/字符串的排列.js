// 字符串的排列
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let set = new Set()
  let temp = []
  let used = []
  function backtrace(startIndex) {
    if (temp.length === s.length) {
      let str = temp.join('')
      set.add(str)
      return
    }
    for (let i = 0; i < s.length; i++) {
      if (used[i]) continue
      temp.push(s[i])
      used[i] = true
      backtrace(startIndex + 1)
      temp.pop()
      used[i] = false
    }
  }
  backtrace(0)
  return [...set]
};

let s = permutation("aab")
console.log(s);
