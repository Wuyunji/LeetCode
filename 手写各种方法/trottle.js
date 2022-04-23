// 节流
function Trottle(fn, delay) {
  let timer = null
  return function (...args) {
    let context = this
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        clearTimeout(timer)
        timer = null
      }, delay);
    }
  }
}

function handleClick(e) {
  console.log('click');
  console.log(this);
  console.log(e);
}
let div = document.getElementById('btn')
div.addEventListener('click', Trottle(handleClick, 3000), false)

