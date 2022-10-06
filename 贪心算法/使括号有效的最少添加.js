// 使括号有效的最少添加
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let left = 0
  let count = 0
  for (let ch of s) {
    if (ch === "(") {
      left++
    } else if (left > 0) {
      left--
    } else {
      count++
    }
  }
  count += left
  return count
};

let s = minAddToMakeValid("((()")
console.log(s);
