const router = require('@koa/router')()

module.exports = router.get('/get/data.json', async ctx => {
  ctx.body = {
    success: true,
    data: {
      text: 'koa2 data json'
    }
  }
}).get('/get/user.json', async ctx => {
  ctx.body = {
    success: true,
    data: {
      text: 'koa2 user json'
    }
  }
})
