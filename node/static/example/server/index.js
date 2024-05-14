const Koa = require('koa')
const path = require('path')
const content = require('./util/content')
const mimes = require('./util/mimes')

const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

// 解析资源类型
const parseMime = (url) => {
  let extname = path.extname(url)
  extname = extname ? extname.slice(1) : 'unknown'
  return mimes[extname]
}

app.use(async (ctx) => {
  // 静态资源目录在本地的绝对路径
  const fullStaticPath = path.join(__dirname, staticPath)

  // 获取静态资源内容，有可能是文件内容，目录，或404
  const [_content] = await Promise.all([content(ctx, fullStaticPath)])

  // 解析请求内容的类型
  const _mime = parseMime(ctx.url)
  // 如果有对应的文件类型，就配置上下文的类型
  if (_mime) {
    ctx.type = _mime
  }

  // 输出静态资源内容
  if (_mime && _mime.indexOf('image/') >= 0) {
    // 如果是图片，则用node原生res，输出二进制数据
    ctx.res.writeHead(200)
    ctx.res.write(_content, 'binary')
    ctx.res.end()
  } else {
    // 其他则输出文本
    ctx.body = _content
  }
})

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
