// 颠倒字符串中的单词
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(' ')
};

let s = reverseWords("  a good   example  ")
console.log(s);
