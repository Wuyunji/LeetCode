// instanceof
function Instanceof(obj, constructor) {
  if (typeof obj !== 'object') return false
  
  let prototype = constructor.prototype
  let proto = Object.getPrototypeOf(obj)
  while (proto) {
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
  return false
}
console.log(Instanceof({}, Object));
console.log(Instanceof([], Array));
console.log(Instanceof([], Object));
console.log(Instanceof(123, Number));
console.log(Instanceof(true, Boolean));

