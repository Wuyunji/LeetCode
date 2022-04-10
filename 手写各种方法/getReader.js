// getReader
Array.prototype.getReader = function () {
  let index = 0
  let that = this
  return {
    read(n = 1) {
      if (typeof n !== 'number') {
        return new Error('Error')
      }
      if (!(/^[1-9]*[0-9][0-9]*$/.test(`${n}`))) {
        return new Error('Error')
      }
      let arr = that.slice(index, index + n)
      index += n
      return arr
    }
  }
}
let arr = [1, 2, 3, 4, 5]
let reader = arr.getReader()
console.log(reader.read('1'));
console.log(reader.read(1.1));
console.log(reader.read(2));
console.log(reader.read());
console.log(reader.read());
console.log(reader.read());
