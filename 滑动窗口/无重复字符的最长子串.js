// 无重复字符的最长子串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let n = s.length
  let left = 0
  let right = 0
  let map = new Map()
  let max = 0
  while (right < n) {
    if (!map.has(s[right]) || map.get(s[right]) < left) {//没重复或重复的不在窗口内
      map.set(s[right], right)
      max = Math.max(right - left + 1, max)//更新无重复字符的最长子串的最大值
      right++
    } else {//有重复，则移动左指针到重复的字符右边，保证窗口内无重复字符
      left = map.get(s[right]) + 1
    }
  }
  return max
};

let s = lengthOfLongestSubstring("abcabcbb")
console.log(s);
