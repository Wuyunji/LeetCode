function New(constructor, ...args) {
  let _this = Object.create(constructor.prototype)
  let x = constructor.apply(_this, args)
  return typeof x === 'object' ? x : _this
}
function Person(name, age) {
  this.name = name
  this.age = age
}
let p = New(Person, 'wyj', 18)
console.log(p);
