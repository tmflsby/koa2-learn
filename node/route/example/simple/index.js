const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

/**
 * 用Promise封装异步读取文件方法
 * @param {String} page html 文件名称
 * @return {Promise}
 * */
const render = page => {
  return new Promise((resolve, reject) => {
    const viewUrl = `./view/${page}`
    fs.readFile(viewUrl, 'binary', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

/**
 * 根据URL 获取HTML内容
 * @param {String} url koa2 上下文的url.ctx.url
 * @return {String} 获取HTML文件内容
 * */
const route = async (url) => {
  let view = '404.html'
  switch (url) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    case '/404':
      view = '404.html'
      break
    default:
      break
  }
  return await render(view)
}

app.use(async (ctx) => {
  const url = ctx.request.url
  ctx.body = await route(url)
})

app.listen(3000, () => {
  console.log('[demo] simple-simple is starting at port 3000')
})
