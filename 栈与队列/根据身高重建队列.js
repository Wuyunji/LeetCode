// 根据身高重建队列
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let arr = []
  people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
  people.forEach(p => arr.length <= p[1] ? arr.push(p) : arr.splice(p[1], 0, p))
  return arr
};
let s = reconstructQueue([[9, 0], [7, 0], [1, 9], [3, 0], [2, 7], [5, 3], [6, 0], [3, 4], [6, 2], [5, 2]])
console.log(s);

