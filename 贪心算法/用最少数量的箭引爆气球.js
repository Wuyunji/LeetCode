// 用最少数量的箭引爆气球
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let end = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      count++;
      end = points[i][1];
    }
  }
  return count;
};

let s = findMinArrowShots([
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
]);
console.log(s);
