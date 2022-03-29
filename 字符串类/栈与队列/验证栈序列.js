/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = []
  stack.push(pushed[0])
  for (let i = 1, j = 0; j < popped.length; j++) {
    while (i < pushed.length && stack[stack.length - 1] !== popped[j]) {
      stack.push(pushed[i++])
    }
    if (stack[stack.length - 1] !== popped[j]) return false
    stack.pop()
  }
  return true
};
let s = validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])
console.log(s);

