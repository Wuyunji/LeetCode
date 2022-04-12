// 深拷贝1
function DeepClone(obj){
	if(typeof obj !== 'object' || obj === null)  return obj
  let target = Array.isArray(obj) ? [] : {}
	for(let key in obj){
		if(obj.hasOwnProperty(key)){
			target[key] = DeepClone(obj[key])
		}
	}
	return target
}
// 深拷贝2
function DeepClone(obj) {
  let target = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (obj[prop] && typeof obj[prop] === 'object') {
          target[prop] = DeepClone(obj[prop])
        } else {
          target[prop] = obj[prop]
        }
      }
    }
  }
  return target
}
// 深拷贝3
Object.prototype.DeepClone = function () {
  let target = Array.isArray(this) ? [] : {}
  if (this && typeof this === 'object') {
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) {
        if (this[prop] && typeof this[prop] === 'object') {
          target[prop] = this[prop].DeepClone()
        } else {
          target[prop] = this[prop]
        }
      }
    }
  }
  return target
}

function deepClone(obj){
	if(typeof obj !== 'object' || obj == null)  return obj
  let target = Array.isArray(obj) ? [] : {}
	for(let key in obj){
		if(obj.hasOwnProperty(key)){
			target[key] = deepClone(obj[key])
		}
	}
	return target
}


let obj = {
  a: 1,
  b: { name: 'wyj' },
  c: [2, 3, { d: '123' }]
}
let obj2 = obj.DeepClone()
console.log(obj);
console.log(obj2);
obj2.b.play = [3, 4, 5]
obj2.c[2] = { d: '2' }
console.log(obj);
console.log(obj2);
