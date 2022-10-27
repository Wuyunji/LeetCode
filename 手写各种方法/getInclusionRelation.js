// getInclusionRelation 获取数组的包含关系
function getInclusionRelation(arrA, arrB) {
  function getInclusionRelationLength(arrA, arrB) {
    let arr1 = arrA.slice();
    let arr2 = arrB.slice();
    return arr1.filter((x) => {
      let index = arr2.indexOf(x);
      if (index !== -1) {
        arr2.splice(index, 1);
        return true;
      }
      return false;
    }).length;
  }
  let lenA = arrA.length;
  let lenB = arrB.length;
  let len = getInclusionRelationLength(arrA, arrB);
  if (len !== lenA && len === lenB) return 2;
  if (len === lenA && len !== lenB) return 1;
  if (len === lenA && len === lenB) return 0;
  return -1;
}

let a1 = [4, 2, 3, 1, 4];
let a2 = [4, 2, 3, 1];
let s1 = getInclusionRelation(a1, a2);
console.log(s1);

let a3 = [4, 2, 3, 1, 4];
let a4 = [4, 2, 3, 1, 4, 5];
let s2 = getInclusionRelation(a3, a4);
console.log(s2);

let a5 = [4, 2, 3, 1, 4];
let a6 = [4, 2, 3, 1, 4];
let s3 = getInclusionRelation(a5, a6);
console.log(s3);

let a7 = [4, 2, 3, 1, 4];
let a8 = [3, 2, 3, 1, 4];
let s4 = getInclusionRelation(a7, a8);
console.log(s4);
