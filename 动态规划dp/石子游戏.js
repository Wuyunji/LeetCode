// 石子游戏
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  let n = piles.length
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (i == j) {
        dp[i][j] = piles[i]
      } else {
        dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])
      }
    }
  }
  // console.log(dp);
  return dp[0][n - 1] > 0
};

let s = stoneGame([5, 3, 4, 5, 6])
console.log(s);
