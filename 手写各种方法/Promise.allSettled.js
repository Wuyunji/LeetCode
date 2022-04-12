// promise.allSettled
Promise.AllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = []
    let count = 0
    promises.forEach((p, index) => {
      Promise.resolve(p).then(value => {
        arr[index] = { status: 'fulfilled', value }
        if (++count === promises.length) {
          resolve(arr)
        }
      }, reason => {
        arr[index] = { status: 'rejected', reason }
        if (++count === promises.length) {
          resolve(arr)
        }
      })
    })
  })
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve('我是1')
  }, 1000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(2);
    reject('我是2')
  }, 500)
})
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(3);
    resolve('我是3')
  }, 1000)
})

Promise.AllSettled([p1, p2, p3]).then(res => {
  console.log(res);
}, err => {
  throw new Error(err, '出错了')
})
