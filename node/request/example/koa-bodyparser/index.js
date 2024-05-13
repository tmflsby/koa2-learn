const Koa = require('koa')
const { bodyParser } = require('@koa/bodyparser')
const app = new Koa()

// 使用ctx.body解析中间件
app.use(bodyParser())

app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    // 当GET请求时候返回表单页面
    ctx.body = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当POST请求的时候，解析POST表单里的数据，并显示出来
    ctx.body = ctx.request.body
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404!</h1>'
  }
})

const server = app.listen(3000, () => {
  console.log('server is running at port 3000...')
})
