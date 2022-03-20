function zhengchu(n, k1, k2, arr) {
  let maxSum = -Infinity
  let count = 0
  function backtrace(startIndex, sum) {
    if (startIndex > n) return
    if (sum % k1 === 0 && sum % k2 !== 0) {
      if (sum > maxSum) {
        count = 1
        maxSum = sum
      } else if (sum === maxSum) {
        count++
      }
    }
    for (let i = startIndex; i < n; i++) {
      sum += arr[i]
      backtrace(i + 1, sum)
      sum -= arr[i]
    }
  }
  backtrace(0, 0)
  return `${maxSum} ${count}`
}
let n = 5
let k1 = 3
let k2 = 4
let arr = [6, 8, -2, -5, 2]

let s = zhengchu(n, k1, k2, arr)
console.log(s);
