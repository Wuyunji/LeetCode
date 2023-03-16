// cssStyleToDomStyle 小驼峰命名 
// 一般解法
function cssStyleToDomStyle1(str) {
  let arr = str.split('')
  let newStr = ''
  if (arr[0] === '-') arr.splice(0, 1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
      newStr += arr[i + 1].toUpperCase()
      i++
    } else {
      newStr += arr[i]
    }
  }
  return newStr
}
// 正则秒杀法
function cssStyleToDomStyle2(str) {
  return str.replace(/-(.)/g, (match, p1, offset, string) => {
    return offset === 0 ? p1 : p1.toUpperCase()
  })
}

let s1 = cssStyleToDomStyle1('-webkit-box-orient') // -->  webkitBoxOrient
let s2 = cssStyleToDomStyle1('line-height') // -->  lineHeight
console.log(s1);
console.log(s2);
