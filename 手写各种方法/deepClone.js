// 深拷贝
Object.prototype.DeepClone = function () {
  let target = Array.isArray(this) ? [] : {}
  if (this && typeof this === 'object') {
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) {
        if (this[prop] && typeof this[prop] === 'object') {
          target[prop] = this[prop].DeepClone()
        } else {
          target[prop] = this[prop]
        }
      }
    }
  }
  return target
}

let obj = {
  a: 1,
  b: { name: 'wyj' },
  c: [2, 3, { d: '123' }]
}
let obj2 = obj.DeepClone()
console.log(obj);
console.log(obj2);
obj2.b.play = [3, 4, 5]
obj2.c[2] = { d: '2' }
console.log(obj);
console.log(obj2);
