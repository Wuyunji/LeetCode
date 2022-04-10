// 扁平化
Array.prototype.Flat = function (depth = 1) {
  if (depth <= 0) return this.slice()
  let arr = this.slice()
  while (arr.some(x => Array.isArray(x) && depth--)) {
    arr = [].concat.apply([], arr)
  }
  return arr
}
let arr = [[1, [2, 3, [4, 5, 6]]]]
let arr1 = arr.flat(Infinity)
let arr2 = arr.Flat(Infinity)
console.log(arr);
console.log(arr1);
console.log(arr2);
