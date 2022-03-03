/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let h = new Array(n + 1)
  h[0] = h[1] = 1
  for (let i = 2; i <= n; i++) {
    h[i] = h[i - 1] * (4 * i - 2) / (i + 1)
  }
  return h[n]
};

let s = numTrees(4)
console.log(s);
