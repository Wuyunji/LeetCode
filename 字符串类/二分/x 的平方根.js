/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0
  let left = 1
  let right = x
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (mid * mid <= x) {
      if ((mid + 1) * (mid + 1) > x) return mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
};
let s = mySqrt(900719925)
console.log(s);
