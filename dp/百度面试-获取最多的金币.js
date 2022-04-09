// 百度面试-获取最多的金币
/**
 * k为初始位置（1-n)
 * 每次只能取相邻格子或当前位置的一枚金币，初始时不拿金币
 * 每次不会移动到没有金币的格子上
 * 返回能获取最多的金币
 * @param {Array} arr 
 * @param {Number} k 
 * @returns 
 */
function getMaxCoin(arr, k) {
  let n = arr.length
  arr.unshift(0)
  arr.push(0)
  function walk(k) {
    if (k < 1 || k > n) return 0
    if (arr[k] <= 0) return 0
    arr[k]--
    let r1 = 1 + walk(k);
    let r2 = 1 + walk(k + 1);
    let r3 = 1 + walk(k - 1);
    return Math.max(r1, r2, r3);
  }
  return walk(k)
}

let arr = [1, 1, 1, 2, 1]
let k = 3
let s = getMaxCoin(arr, k)
console.log(s);
