// DeepColne 深克隆 深拷贝
// 深拷贝1 (面试高分版)
function DeepClone(obj, hash = new WeakMap()) {
  if (obj === null || obj === undefined) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (typeof obj !== "object") return obj
  if (hash.has(obj)) return hash.get(obj)

  let target = Array.isArray(obj) ? [] : {}
  hash.set(obj, target)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      target[key] = DeepClone(obj[key], hash)
    }
  }
  return target
}
// 深拷贝2 (简易版)
function DeepClone2(obj) {
  let target = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (obj[prop] && typeof obj[prop] === 'object') {
          target[prop] = DeepClone2(obj[prop])
        } else {
          target[prop] = obj[prop]
        }
      }
    }
  }
  return target
}

let obj = {
  a: 9999,
  b: 'string',
  c: false,
  d: null,
  e: undefined,
  f: true,
  g: { name: 'xiaoming' },
  h: [1, 2, 3],
  i: new Date(),
  g: new RegExp(/^abcd$/),
  k: function F() { return 1 },
  l: Symbol(),
  m: BigInt(777),
  n: [{ name: 'aaa' }, { name: 'bbb' }]
}

let cloneObj = DeepClone(obj)
console.log(obj);
console.log(cloneObj);

let obj2 = {}
let obj3 = {}
obj2.a = obj3
obj3.b = obj2

let cloneObj2 = DeepClone(obj2)
console.log(obj2);
console.log(cloneObj2);
