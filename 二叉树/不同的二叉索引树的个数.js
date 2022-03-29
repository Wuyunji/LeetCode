/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // let h = new Array(n + 1)
  // h[0] = h[1] = 1
  // for (let i = 2; i <= n; i++) {
  //   h[i] = h[i - 1] * (4 * i - 2) / (i + 1)
  // }
  // return h[n]
  
  let h = 1
  for (let i = 2; i <= n; i++) {
    h = h * (4 * i - 2) / (i + 1)
  }
  return h
};

let s = numTrees(5)
console.log(s);
