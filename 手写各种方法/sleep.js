// sleep
function Sleep(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, delay * 1000);
  })
}

Sleep(1).then(res => {
  console.log(res);
})
