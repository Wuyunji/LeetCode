// promisify
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      args.push((err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
      fn(...args)
    })
  }
}
