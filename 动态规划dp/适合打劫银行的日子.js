// 适合打劫银行的日子
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
 var goodDaysToRobBank = function (security, time) {
  let n = security.length
  if (time > n) return []
  let arr = []
  let down = new Array(n).fill(0)
  let up = new Array(n).fill(0)
  for (let i = 1; i < n; i++) {
      if (security[i] <= security[i - 1]) {
          down[i] = down[i - 1] + 1
      }
      if (security[n - i - 1] <= security[n - i]) {
          up[n - i - 1] = up[n - i] + 1
      }
  }
  for (let i = 0; i < n; i++) {
      if (down[i] >= time && up[i] >= time) {
          arr.push(i)
      }
  }
  return arr
};

let s = goodDaysToRobBank([1,2,3,4,5,6], 2)
console.log(s);
