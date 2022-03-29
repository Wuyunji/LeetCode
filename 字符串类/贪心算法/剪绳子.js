/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) return n - 1
  let a = Math.floor(n / 3)
  let b = n % 3
  if (b === 0) return 3 ** a
  if (b === 1) return 3 ** (a - 1) * 2 * 2
  if (b === 2) return 3 ** a * 2
};
let s = cuttingRope(10)
console.log(s);
