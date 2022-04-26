// 去重 unique
Array.prototype.Unique = function () {
  let arr = []
  let map = new Map()
  for (let i = 0; i < this.length; i++) {
    if (!map.get(this[i])) {
      map.set(this[i], true)
      arr.push(this[i])
    }
  }
  return arr
}

let obj = {}
let sb = Symbol(1)
let big = 123n
let fn = function () { }
let arr = [+0, +0, -0, -0, NaN, NaN, undefined, undefined, true, true, obj, obj, sb, sb, big, big, fn, fn, null, null]
let s = arr.Unique()
console.log(s);
