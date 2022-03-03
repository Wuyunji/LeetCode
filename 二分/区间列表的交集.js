/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  let i = 0;
  let j = 0;
  let arr = []
  while(i < firstList.length && j < secondList.length){
    let max = Math.max(firstList[i][0], secondList[j][0])
    let min = Math.min(firstList[i][1], secondList[j][1])
    if(max <= min){
      arr.push([max, min])
    }
    if(firstList[i][1] < secondList[j][1]){
      i++
    }else{
      j++
    }
  }
  return arr
};
let s = intervalIntersection([[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]])
console.log(s);
