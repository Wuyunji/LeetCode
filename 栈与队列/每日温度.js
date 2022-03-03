/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let len = temperatures.length
  let arr = new Array(len).fill(0)
  let stack = []
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let index = stack.pop()
      arr[index] = i - index;
    }
    stack.push(i)
  }
  return arr
}
let s = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
console.log(s);
