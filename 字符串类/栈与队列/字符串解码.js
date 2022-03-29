/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {//3[a2[c]] --> accaccacc
  let stack1 = []//字母
  let stack2 = []//数字
  let str = ''
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      count = count * 10 + (s[i] - '0')
    } else if (s[i] === '[') {
      stack1.push(str)
      stack2.push(count)
      str = ''
      count = 0
    } else if (s[i] === ']') {
      str = stack1.pop() + str.repeat(stack2.pop())
    } else {
      str += s[i]
    }
    console.log(str);
  }
  return str
};
let s = decodeString("10[a]")
console.log(s);
