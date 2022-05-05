// getValueByPath 属性字符串
function getValueByPath(obj, path) {
  let paths = path.split('.')
  let res = obj
  let prop
  while (prop = paths.shift()) {
    res = res[prop]
  }
  return res
}

let o = {
  a: {
    b: {
      c: {
        d: {
          e: '正确了',
          f: '正确了吗'
        },
        g: '与 d 同级'
      },
      h: '与 c 同级'
    },
    i: '与 b 同级'
  },
  j: '与 a 同级'
};

console.log('a.b.c.d.e', getValueByPath(o, 'a.b.c.d.e'));
console.log('a.b.c', getValueByPath(o, 'a.b.c'));
console.log('a.i', getValueByPath(o, 'a.i'));
