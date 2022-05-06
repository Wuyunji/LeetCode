/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let map = new Map()
  for (let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1)
    } else {
      map.set(c, 1)
    }
  }
  let arr = [...map.values()].sort((a, b) => b - a)
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      if (arr[i - 1] === 0) {
        count += arr[i]
        arr[i] = 0
      } else {
        count += arr[i] - arr[i - 1] + 1
        arr[i] -= arr[i] - arr[i - 1] + 1
      }
    }
  }
  return count
};

let s = minDeletions("aaabbbcc")
console.log(s);
