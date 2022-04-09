// 岛屿数量
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0
  let m = grid.length
  let n = grid[0].length
  function backtrace(x, y) {
    if (grid[x][y] === '0') return
    grid[x][y] = '0'
    if (y + 1 >= 0 && y + 1 < n) backtrace(x, y + 1)
    if (x + 1 >= 0 && x + 1 < m) backtrace(x + 1, y)
    if (y - 1 >= 0 && y - 1 < n) backtrace(x, y - 1)
    if (x - 1 >= 0 && x - 1 < m) backtrace(x - 1, y)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++
        backtrace(i, j)
      }
    }
  }
  return count
};
let s = numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
])
console.log(s);
