/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let sum = 0
  while(n){ 
      n &= n-1
      sum++
  }
  return sum
};
let s = hammingWeight(128)
console.log(s);
// n & (n-1)
// 110100
// 110011
// 110000
// 101111
// 100000
// 011111
// 000000
