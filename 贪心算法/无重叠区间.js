// 无重叠区间
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      count++;
    } else {
      end = intervals[i][1];
    }
  }
  return count;
};

let s = eraseOverlapIntervals([
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
]);
console.log(s);
