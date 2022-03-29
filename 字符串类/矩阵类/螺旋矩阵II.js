/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const LEFT = 'left'
  const RIGHT = 'right'
  const UP = 'up'
  const DOWN = 'down'
  
  let boundLeft = 0
  let boundRight = n - 1
  let boundTop = 0
  let boundBottom = n - 1
  
  let arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let i = 0
  let j = 0
  let flag = RIGHT

  for (let k = 1; k <= n * n; k++) {
    arr[i][j] = k
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
let s = generateMatrix(1)
console.log(s);

