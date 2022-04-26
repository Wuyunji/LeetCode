// 验证回文串
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // let str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  // let i = 0
  // let j = str.length - 1
  // while (i < j) {
  //   if (str[i++] != str[j--]) return false
  // }
  // return true
  let str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  return str === str.split('').reverse().join('')
};

let s = isPalindrome("A man, a plan, a canal: Panama")
console.log(s);
