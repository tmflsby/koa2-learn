const Koa = require('koa')
const app = new Koa()

const render = require('./util/render')

app.use(async (ctx) => {
  ctx.body = await render('index.html')
})

app.listen(3000)
console.log('[demo] start-async is starting at port 3000...')
