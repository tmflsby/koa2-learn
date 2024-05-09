# koa-router中间件

如果依靠ctx.request.url去手动处理路由，将会写很多处理代码，这时候就需要对应的路由的中间件对路由进行控制，这里介绍一个比较好用的路由中间件koa-router

## 安装koa-router中间件
```sh
npm install @koa/router
```

## 快速使用koa-router
[demo源码](./example/koa-router/index.js)

```js
const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()

// 创建子路由1
const home = new Router()
home.get('/', async (ctx) => {
  ctx.body = `
    <ul>
      <li><a href="/page/helloWorld">/page/helloWorld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
})

// 创建子路由2
const page = new Router()
page.get('/404', async (ctx) => {
  ctx.body = '404 page'
}).get('/helloWorld', async (ctx) => {
  ctx.body = 'helloWorld page'
})

// 装载所有子路由
const router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is starting at port 3000')
})
```
