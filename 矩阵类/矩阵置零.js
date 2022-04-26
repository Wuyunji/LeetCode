// 矩阵置零
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let row = matrix.length
  let col = matrix[0].length
  let flagRow = false
  let flagCol = false
  if (row === 1 && col === 1) return
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      flagCol = true
      break
    }
  }
  for (let j = 0; j < col; j++) {
    if (matrix[0][j] === 0) {
      flagRow = true
      break
    }
  }

  // console.log(matrix);

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }

  // console.log(matrix);

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  // console.log(matrix);

  if (flagRow) {
    for (let j = 0; j < col; j++) {
      matrix[0][j] = 0
    }
  }
  if (flagCol) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0
    }
  }
};

let matrix = [[0, 1]]
setZeroes(matrix)
console.log(matrix);

