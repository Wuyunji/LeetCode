// 丑数II
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let dp = new Array(n)
  let p2 = 0, p3 = 0, p5 = 0;
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5
    dp[i] = Math.min(num2, num3, num5)
    if (dp[i] === num2) p2++
    if (dp[i] === num3) p3++
    if (dp[i] === num5) p5++
  }
  return dp[n-1]

  // let dp = []
  // for (let i = 1; n > 0; i++) {
  //   if (i <= 6 || dp[i / 2] || dp[i / 3] || dp[i / 5]) {
  //     n--
  //     dp[i] = true
  //   } else {
  //     dp[i] = false
  //   }
  // }
  // return dp.lastIndexOf(true)
}

let s = nthUglyNumber(342)
console.log(s);
