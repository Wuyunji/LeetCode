// LRU缓存
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let value = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, value)
    return value
  } else {
    return -1
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key)
  } else if (this.map.size === this.capacity) {
    this.map.delete(this.map.keys().next().value)
  }
  this.map.set(key, value)
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
let obj = new LRUCache(5)
obj.put('a', 1)
obj.put('b', 2)
obj.put('c', 3)
obj.put('d', 4)
obj.put('e', 5)
console.log(obj.get('a'));
obj.put('f', 6)
console.log(obj.get('b'));
