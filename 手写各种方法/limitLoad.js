// limitLoad imgLoad
function limitLoad(urls, imgLoad, limit) {
  let A = urls.slice(0, limit)
  let B = urls.slice(limit, urls.length)
  let promises = A.map((url, index) => {
    return imgLoad(url)
      .then((img) => {
        document.getElementsByTagName('html')[0].appendChild(img)
        return index
      })
  })
  return B.reduce((p, url) => {
    return p.then(() => {
      return Promise.race(promises)
    })
      .then(fastestIndex => {
        promises[fastestIndex] = imgLoad(url)
          .then((img) => {
            document.getElementsByTagName('html')[0].appendChild(img)
            return fastestIndex
          })
      })
      .catch(err => {
        console.log(err);
      })
  }, Promise.resolve())
    .then(() => {
      return Promise.all(promises)
    })
}

function imgLoad(url) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = url
    img.onload = function () {
      console.log('done ' + url);
      resolve(img)
    }
    img.onerror = function () {
      reject(new Error('fail ' + url))
    }
  })
}
var urls = [
  "./1.jpg",
  "./2.jpg",
  "./33.jpg",
  "./4.jpg",
  "./5.jpg",
  "./6.jpg",
  "./7.jpg",
  "./8.jpg",
];

limitLoad(urls, imgLoad, 3)
  .then(() => {
    console.log('全部完成');
  })
  .catch(err => {
    console.log(err);
  })
