// 单词搜索
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length
  let n = board[0].length
  let len = word.length
  let used = new Array(m).fill(0).map(() => new Array(n).fill(false))
  function backtrace(i, j, index) {
    if (index >= len) return true
    if (i < 0 || j < 0 || i >= m || j >= n) return false
    if (used[i][j] || board[i][j] !== word[index]) return false
    used[i][j] = true
    if (
      backtrace(i, j + 1, index + 1) ||
      backtrace(i + 1, j, index + 1) ||
      backtrace(i, j - 1, index + 1) ||
      backtrace(i - 1, j, index + 1)
    ) {
      return true
    }
    used[i][j] = false
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && backtrace(i, j, 0)) {
        return true
      }
    }
  }
  return false
};
let s = exist([
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
], "ABCCED")
console.log(s);
