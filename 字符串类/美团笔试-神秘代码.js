// 美团笔试-神秘代码
function shenmidaima(n, t, s) {
  if (t === 1) {
    let str = ''
    while (s !== '') {
      let index = Math.ceil(n / 2)
      n--
      str += s[index - 1]
      s = s.substring(0, index - 1) + s.substring(index)
    }
    return str
  } else {
    let even = []
    let odd = []
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        even.push(s[i])
      } else {
        odd.unshift(s[i])
      }
    }
    return n % 2 === 0 ?
      odd.concat(even).reverse().join('') :
      odd.concat(even).join('')
  }
}

let n = 10
// let t = 1
// let s = 'abcdefghij'
let t = 2
let s = 'efdgchbiaj'
let ans = shenmidaima(n, t, s)
console.log(ans);
