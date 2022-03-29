class MyLazyMan {
  constructor(name) {
    console.log(name);
    this.queue = []
    setTimeout(() => {
      this.next()
    });
  }
  eat = (food) => {
    this.queue.push(() => {
      console.log('i am eatting ' + food);
      this.next()
    })
    return this
  }
  sleep = (time) => {
    this.queue.push(() => {
      setTimeout(() => {
        console.log('sleep ' + time + 's');
        this.next()
      }, time * 1000);
    })
    return this
  }
  sleepFirst = (time) => {
    this.queue.unshift(() => {
      setTimeout(() => {
        console.log('sleepFirst ' + time + 's');
        this.next()
      }, time * 1000);
    })
    return this
  }
  next = () => {
    let fn = this.queue.shift()
    fn && fn()
  }
}
function LazyMan(message) {
  return new MyLazyMan(message)
}


LazyMan('LazyMan').eat('banana').sleep(2).eat('apple').sleepFirst(4).eat('banana')
