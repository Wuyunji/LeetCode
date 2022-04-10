// 防抖
function Debounce(fn, delay) {
  let timer = null
  return function (...args) {
    let context = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay);
  }
}
function handleClick(e){
  console.log('click');
  console.log(this);
  console.log(e);
}
let div = document.getElementById('btn')
div.addEventListener('click', Debounce(handleClick, 3000), false)

