/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function (strs) {
  let map = new Map()
  for (let str of strs) {
    let key = Array.from(str).sort((a, b) => a.charCodeAt() - b.charCodeAt()).toString()
    let value = map.get(key) || []
    value.push(str)
    map.set(key, value)
  }
  return Array.from(map.values())
};
let s = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(s);
