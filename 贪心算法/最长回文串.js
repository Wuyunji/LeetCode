/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = new Map();
  for (let ch of s) {
    if (map.has(ch)) {
      map.set(ch, 1 + map.get(ch));
    } else {
      map.set(ch, 1);
    }
  }
  let count = 0;
  let flag = 0;
  map.forEach((value) => {
    if (value % 2 === 0) {
      count += value;
    } else {
      flag = 1;
      count += value - 1;
    }
  });
  return count + flag;
};

let s = longestPalindrome("abbbccsdds");
console.log(s);
