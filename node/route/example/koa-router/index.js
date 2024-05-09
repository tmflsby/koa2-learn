const Koa = require('koa');
const router = require('./router');

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is running at port 3000');
})
