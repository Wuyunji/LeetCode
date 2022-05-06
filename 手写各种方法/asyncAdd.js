// 异步加法
// 假设本地机器无法做加减乘除运算，需要通过远程请求让服务端来实现。
// 以加法为例，现有远程API的模拟实现
const addRemote = async (a, b) => new Promise(resolve => {
  setTimeout(() => resolve(a + b), 1000)
});

// 版本1 基础版
async function add(...args) {
  if (args.length === 1) return args[0]
  let a = args.pop()
  let b = args.pop()
  let c = await addRemote(a, b)
  args.push(c)
  return add(...args)
}

// 版本2 reduce高级版
// async function add(...args) {
//   return args.reduce((p, cur) => {
//     return p.then(res => {
//       return addRemote(res, cur)
//     })
//   }, Promise.resolve(0))
// }

// 版本3 效率最高
// async function add(...args) {
//   if (args.length <= 1) return Promise.resolve(args[0])
//   const promiseList = []
//   for (let i = 0; i * 2 < args.length - 1; i++) {
//     const promise = addRemote(args[i * 2], args[i * 2 + 1])
//     promiseList.push(promise)
//   }
//   if (args.length % 2) {
//     promiseList.push(Promise.resolve(args[args.length - 1]))
//   }
//   return Promise.all(promiseList).then(res => {
//     return add(...res)
//   })
// }

add(1, 2, 3)
  .then(result => {
    console.log(result); // 6
  });
