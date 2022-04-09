// 搜索二维矩阵II
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let left = 0
    let right = matrix[i].length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (matrix[i][mid] > target) {
        right = mid - 1
      } else if (matrix[i][mid] < target) {
        left = mid + 1
      } else {
        return true
      }
    }
  }
  return false
};
let s = searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20)
console.log(s);
