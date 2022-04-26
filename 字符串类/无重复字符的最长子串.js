// 无重复字符的最长子串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let temp = ''
  for (let j = 0; j < s.length; j++) {
    if (temp.includes(s[j])) {
      temp = temp.slice(1)
      j--
    } else {
      temp += s[j]
      max = Math.max(temp.length, max)
    }
  }
  return max
};

let s = lengthOfLongestSubstring("aab")
console.log(s);
