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


// public List<List<String>> groupAnagrams(String[] strs) {
//   //判断是否为空字符串数组
//    if(strs == null || strs.length == 0){
//        return new ArrayList();
//    }
//    //1.创建一个哈希表
//    Map<String,List> map = new HashMap<String, List>();
//    for (String s: strs) {
//        //将字符串转化为字符数组
//        char[] chars = s.toCharArray();
//        //对字符数组按照字母顺序排序
//        Arrays.sort(chars);
//        //将排序后的字符串作为哈希表中的key值
//        String key = String.valueOf(chars);
//        //2.判读哈希表中是否有该key值
//        if (!map.containsKey(key)){
//            //若不存在，则为新的异位词语，在map中创建新的键值对
//            map.put(key,new ArrayList());
//        }
//        //3.将该字符串放在对应key的list中
//        map.get(key).add(s);
//    }
//    //返回map中所有键值对象构成的list
//    return new ArrayList(map.values());
// }

