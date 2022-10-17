// x 的平方根
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 1;
  let right = x >> 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return right;
};

let s = mySqrt(900719925);
console.log(s);
