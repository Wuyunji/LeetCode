Array.prototype.Reduce = function (fn, initValue) {
  let sum = initValue || this[0]
  for (let i = initValue ? 0 : 1; i < this.length; i++) {
    sum = fn(sum, this[i], i, this)
  }
  return sum
}
let arr = [1, 2, 3]
let sum = arr.Reduce((pre, now) => {
  return pre + now
}, 100)
console.log(sum);
