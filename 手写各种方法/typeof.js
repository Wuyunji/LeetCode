// typeof
function Typeof(x) {
  return x === null ? 'object' : Object.prototype.toString.call(x).slice(8, -1).toLowerCase()
}

console.log(Typeof(123));
console.log(Typeof(true));
console.log(Typeof('123'));
console.log(Typeof({}));
console.log(Typeof(Symbol()));
console.log(Typeof(123n));
console.log(Typeof(undefined));
console.log(Typeof(null));
