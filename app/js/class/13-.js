// Promise
// 异步
{
  // 基本定义  es5 的回调
  let ajax = (callback) => {
    console.log('执行')
    setTimeout(() => {
      callback && callback.call() // 执行callback
    }, 1000);
  }

  ajax(() => {
    console.log("timeout1")
  })
}

{
  let ajax = () => {
    console.log('执行2')
    return new Promise((resolve, reject) => { // 函数执行完后不执行回调, 而是返回一个Promis对象
      // resolve 表示执行下一步的操作
      // reject 表示要中断当前的操作
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }
  // 使用
  ajax().then(
    () => {   // then的第一个参数方法, 就是下一步的操作
      console.log('promise', 'timeout2')
    },
    () => { // 第二个参数方法对应reject
      console.log('reject')
    }
  )
}

{
  let ajax = () => {
    console.log('执行3')
    return new Promise((resolve, reject) => { // 函数执行完后不执行回调, 而是返回一个Promis对象
      // resolve 表示执行下一步的操作
      // reject 表示要中断当前的操作
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

  ajax()
    .then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000);
      })
    })
    .then(() => {
      console.log('timeout3')
    })
}

{
  // 捕获错误
  let ajax = (num) => {
    console.log('执行4')
    return new Promise((resolve, reject) => {
      if (num > 5) {
        resolve()
      }
      else {
        throw new Error('出错')
      }
    })
  }

  ajax(4)
    .then(() => {
      console.log('log', 6)
    })
    .catch((err) => {
      console.log('err', err)
    })
}
// Promise 作用

// Promise 高级用法
{
  // 所有图片加载完再添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = () => {  // 加载完图片
        resolve(img)
      }
      img.onerror = (err) => {
        reject(err)
      }
    })
  }

  function showImgs(imgs) {
    imgs.forEach((img) => {
      document.body.appendChild(img)
    })
  }

  // 把多个Promise实例, 当做一个Promise实例
  // 当所有内部Promise实例都完成后, 会创建新的Promise实例
  Promise.all([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
    loadImg('http://i4.buimg.com/567571/5eb8190d6b2a1c9c.png')
  ]).then(showImgs)
}

{
  // 先到先得, 有一个图加载完就添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = () => {  // 加载完图片
        resolve(img)
      }
      img.onerror = (err) => {
        reject(err)
      }
    })
  }

  function showImgs(img) {
    let p = document.createElement('p')
    p.appendChild(img)
    document.body.appendChild(p)
  }

  // 只要一个状态先改变, 就改变race状态
  Promise.race([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
    loadImg('http://i4.buimg.com/567571/5eb8190d6b2a1c9c.png')
  ]).then(showImgs)
}