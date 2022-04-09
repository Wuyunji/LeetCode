// 杨辉三角
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]
  let arr = new Array(numRows)
  for (let i = 0; i < numRows; i++) {
    arr[i] = new Array(i + 1).fill(1)
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
    }
  }
  return arr
};
let s = generate(3)
console.log(s);

