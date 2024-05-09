const router = require('@koa/router')()

module.exports = router.get('/404', async ctx => {
  ctx.body = '404 page'
}).get('/helloWorld', async ctx => {
  ctx.body = 'helloWorld page'
})
