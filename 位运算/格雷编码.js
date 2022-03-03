/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let G = [];
  for (let i = 0; i < 1 << n; i++) {
    G.push(i ^ (i >> 1));
  }
  return G
};

let s = grayCode(3)
console.log(s);
