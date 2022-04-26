// 有效的括号
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  let match = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {
      if (stack.length === 0) return false
      if (match[s[i]] !== stack[stack.length - 1]) return false
      stack.pop()
    }
  }
  return stack.length === 0
};

let s = isValid("()[]")
console.log(s);







