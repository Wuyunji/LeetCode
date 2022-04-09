// 螺旋矩阵
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const LEFT = 'left'
  const RIGHT = 'right'
  const UP = 'up'
  const DOWN = 'down'

  let row = matrix.length
  let col = matrix[0].length
  let n = row * col

  let boundLeft = 0
  let boundRight = col - 1
  let boundTop = 0
  let boundBottom = row - 1

  let arr = []
  let i = 0
  let j = 0
  let flag = col === 1 ? DOWN : RIGHT
  
  for (let k = 0; k < n; k++) {
    arr.push(matrix[i][j])
    switch (flag) {
      case RIGHT:
        j++
        if (j == boundRight) {
          boundTop++
          flag = DOWN
        }
        break
      case DOWN:
        i++
        if (i == boundBottom) {
          boundRight--
          flag = LEFT
        }
        break
      case LEFT:
        j--
        if (j == boundLeft) {
          boundBottom--
          flag = UP
        }
        break
      case UP:
        i--
        if (i == boundTop) {
          boundLeft++
          flag = RIGHT
        }
        break
    }
  }
  return arr
};
let s = spiralOrder([[1]])
console.log(s);
