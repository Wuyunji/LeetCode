// 第一个只出现一次的字符
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let map = new Map()
  for (let ch of s) {
    map.set(ch, map.has(ch) ? map.get(ch) + 1 : 1)
  }
  for(let [key,value] of map){
    if(value === 1) return key
  }
  return ' '
};
let s = firstUniqChar("abaccdeff")
console.log(s);

