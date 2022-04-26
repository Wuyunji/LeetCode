// 旋转图像
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      [
        matrix[i][j],
        matrix[j][n - 1 - i],
        matrix[n - 1 - i][n - 1 - j],
        matrix[n - 1 - j][i]
      ] = [
          matrix[n - 1 - j][i],
          matrix[i][j],
          matrix[j][n - 1 - i],
          matrix[n - 1 - i][n - 1 - j]
        ]
    }
  }
};

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(matrix)
console.log(matrix);


