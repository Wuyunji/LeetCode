// 爬楼梯
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // if(n == 1)  return 1
  // if(n == 2)  return 2
  // return climbStairs(n-2) + climbStairs(n-1)
  if (n == 1) return 1
  if (n == 2) return 2
  let f1 = 1
  let f2 = 2
  let f
  for (let i = 0; i < n - 2; i++) {
    f = f1 + f2
    f1 = f2
    f2 = f
  }
  return f
};
console.log(climbStairs(10));
