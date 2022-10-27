/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = grid[0][j] + dp[0][j - 1];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  return dp[m - 1][n - 1];
};

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
let s = minPathSum(grid);
console.log(s);
