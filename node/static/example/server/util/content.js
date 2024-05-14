const path = require('path');
const fs = require('fs');

// 封装读取目录内容方法
const dir = require('./dir');

// 封装读取文件内容方法
const file = require('./file');

/**
 * 获取静态资源内容
 * @param  {Object} ctx koa上下文
 * @param  {String} fullStaticPath 静态资源目录在本地的绝对路径
 * @return  {String} 请求获取到的本地内容
 * */
const content = (ctx, fullStaticPath) => {
  // 封装请求资源的完绝对径
  const reqPath = path.join(fullStaticPath, ctx.url);

  // 判断请求路径是否为存在目录或者文件
  const exists = fs.existsSync(reqPath)

  // 返回请求内容， 默认为空
  let content = '';
  if (!exists) {
    //如果请求路径不存在，返回404
    content = '404 Not Found';
  } else {
    // 判断访问地址是文件夹还是文件
    const stat = fs.statSync(reqPath);
    if (stat.isDirectory()) {
      //如果为目录，则渲读取目录内容
      content = dir(ctx.url, reqPath);
    } else {
      // 如果是文件，则读取文件内容
      content = file(reqPath);
    }
  }
  return content;
}

module.exports = content;
