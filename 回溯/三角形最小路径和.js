// 三角形最小路径和
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let n = triangle.length
  let dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
    }
  }
  console.log(dp);
  return dp[0][0]
  // let min = Infinity
  // function backtrace(i, j, sum) {
  //   sum += triangle[i][j]
  //   if (i === triangle.length - 1) {
  //     min = Math.min(sum, min)
  //     return
  //   }
  //   backtrace(i + 1, j, sum)
  //   backtrace(i + 1, j + 1, sum)
  // }
  // backtrace(0, 0, 0)
  // return min
};

let s = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])
console.log(s);
