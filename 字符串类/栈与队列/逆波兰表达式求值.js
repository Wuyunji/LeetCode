/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  function isNumber(token) {
    return !('+' === token || '-' === token || '*' === token || '/' === token)
  }
  let stack = []
  for (let token of tokens) {
    if (isNumber(token)) {
      stack.push(parseInt(token))
    } else {
      let b = stack.pop()
      let a = stack.pop()
      if (token === '+') {
        stack.push(a + b)
      } else if (token === '-') {
        stack.push(a - b)
      } else if (token === '*') {
        stack.push(a * b)
      } else if (token === '/') {
        stack.push(parseInt(a / b))
      }
    }
  }
  return stack[0]
};

let s = evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
console.log(s);
