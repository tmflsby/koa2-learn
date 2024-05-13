# koa-bodyparser中间件

## 原理
对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中

### 安装koa2版本的koa-bodyparser@3中间件
```sh
npm install --save koa-bodyparser@3
```

## 举个例子

### 例子代码

[demo](./example/koa-bodyparser/index.js)

```js
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

```

### 启动例子

### 访问页面
![koa-bodyparser-01](./image/koa-bodyparser-01.png)

### 提交表单发起POST请求结果显示
![koa-bodyparser-02](./image/koa-bodyparser-02.png)
