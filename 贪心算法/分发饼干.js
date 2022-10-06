// 分发饼干
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i++;
      j++;
      count++;
    } else {
      j++;
    }
  }
  return count;
};

let s = findContentChildren([7, 8, 9, 10], [5, 6, 7, 8]);
console.log(s);
