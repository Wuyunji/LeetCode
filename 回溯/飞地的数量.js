// 飞地的数量
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let m = grid.length
  let n = grid[0].length

  function dfs(x, y) {
    if (x < 0 || x >= m || y < 0 || y >= n || !grid[x][y]) return
    grid[x][y] = 0
    dfs(x + 1, y)
    dfs(x, y + 1)
    dfs(x - 1, y)
    dfs(x, y - 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((!i || i === m - 1 || !j || j === n - 1) && grid[i][j]) {
        dfs(i, j)
      }
    }
  }

  return grid.reduce((sum, arr) => sum + arr.reduce((sum, s) => sum + s, 0), 0)
};

let s = numEnclaves([
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
])
console.log(s);
