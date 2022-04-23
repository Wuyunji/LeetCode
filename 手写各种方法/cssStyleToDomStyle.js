// 小驼峰命名
function cssStyleToDomStyle(str) {
  return str.replace(/-(.)/g, (match, p1, offset, string) => {
    return offset === 0 ? p1 : p1.toUpperCase()
  })
}

// function cssStyleToDomStyle(str) {
//   let arr = str.split('')
//   let newStr = ''
//   if (arr[0] === '-') arr.splice(0, 1)
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '-') {
//       newStr += arr[i + 1].toUpperCase()
//       i++
//     } else {
//       newStr += arr[i]
//     }
//   }
//   return newStr
// }

let s = cssStyleToDomStyle('-webkit-box-orient') // -->  webkitBoxOrient
console.log(s);
