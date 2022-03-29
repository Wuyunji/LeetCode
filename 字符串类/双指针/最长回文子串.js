 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = ""
  for (let i = 0; i < s.length; i++) {
      let str1 = palindrome(i, i)
      let str2 = palindrome(i, i + 1)
      res = str1.length > res.length ? str1 : res
      res = str2.length > res.length ? str2 : res
  }
  function palindrome(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          left--
          right++
      }
      return s.slice(left + 1, right)
  }
  return res
};
let s = longestPalindrome('cbbd')
console.log(s);
