// 版本比较 compareVersion
function compareVersion(v1, v2) {
  let arr1 = v1.split('.')
  let arr2 = v2.split('.')
  let len = Math.max(arr1.length, arr2.length)
  while (arr1.length < len) {
    arr1.push('0')
  }
  while (arr2.length < len) {
    arr2.push('0')
  }
  for (let i = 0; i < len; i++) {
    let num1 = parseInt(arr1[i])
    let num2 = parseInt(arr2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }
  return 0
}

let s = compareVersion('1.11.1', '1.9.9') // 1
console.log(s);
