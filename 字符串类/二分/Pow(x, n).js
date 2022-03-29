/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let X = x
  let N = n > 0 ? n : -n
  let s = 1
  while (N > 0) {
    if (N % 2 === 1) {
      s *= X
    }
    X *= X
    N = Math.floor(N / 2)
  }
  return n > 0 ? s : 1 / s
};
let s = myPow(3, 0)
console.log(s);
