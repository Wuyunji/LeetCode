/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let flagArr = new Array(n).fill(true)
  let primeArr = []
  for (let i = 2; i < n; i++) {
    if (flagArr[i]) primeArr.push(i)
    for (let j = 0; j < primeArr.length && i * primeArr[j] < n; j++) {
      flagArr[i * primeArr[j]] = false
      if (i % primeArr[j] === 0) break
    }
  }
  return primeArr.length
};
let s = countPrimes(10)
console.log(s);
