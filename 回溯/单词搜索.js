var exist = function (board, word) {
  let used = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(false))

  function backtrace(i, j, index) {
    if (index >= word.length) return true
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length
    ) return false
    if (used[i][j] || board[i][j] !== word[index]) return false
    used[i][j] = true
    if (
      backtrace(i, j + 1, index + 1) ||
      backtrace(i + 1, j, index + 1) ||
      backtrace(i, j - 1, index + 1) ||
      backtrace(i - 1, j, index + 1)
    ) return true
    used[i][j] = false
    return false
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
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
