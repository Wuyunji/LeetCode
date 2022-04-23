// 石子游戏II
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGameII = function (piles) {
  let n = piles.length
  let dp = new Array(n).fill(0).map(() => new Array(n+1).fill(-1))
  let sum = 0

  for (let i = n - 1; i >= 0; i--) {
    sum += piles[i]
    for (let M = 1; M <= n; M++) {
      if (n - i <= 2 * M) {
        dp[i][M] = sum
      } else {
        for (let x = 1; x <= 2 * M; x++) {
          dp[i][M] = Math.max(dp[i][M], sum - dp[i + x][Math.max(M, x)])
        }
      }
    }
  }
  console.log(dp);
  return dp[0][1]
};
let s = stoneGameII([5, 3, 4, 5, 6])
console.log(s);
