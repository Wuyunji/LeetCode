// normalize 1
function normalize(str) {
  let arr = str.match(/(?=\w)\w+/g)
  // let arr = str.split(/[\[\]]/g).filter(Boolean)
  let length = arr.length
  function solution(index) {
    if (index === length - 1) {
      return {
        value: arr[index]
      }
    }
    return {
      value: arr[index],
      children: solution(index + 1),
    }
  }
  return JSON.stringify(solution(0))
}

// normalize 2
// function normalize(str) {
//   const result = {}
//   str.match(/(?=\w)\w+/g).reduce((total, current, index, arr) => {
//     total.value = current
//     if (index < arr.length - 1) {
//       return (total.children = {})
//     }
//   }, result)
//   return result
// }

let s1 = normalize('abc')
let s2 = normalize('[abc[bcd[def]]]')
console.log(s1)
console.log(s2)
