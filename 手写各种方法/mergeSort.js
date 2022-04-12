// 归并排序
function mergeSort(arr) {
  if (arr.length === 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  
  function merge(left, right) {
    let result = []
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    return result.concat(left).concat(right)
  }

  return merge(mergeSort(left), mergeSort(right))
}

var arr = [2, 5, 3, 4, 1, 9, 6, 7, 8]
console.log(mergeSort(arr));
