// 遍历读取目录内容方法
const walk = require('./walk');

/**
 * 封装目录内容
 * @param {String} url 当前请求的上下文中的url，即ctx.url
 * @param {String} reqPath 请求静态资源的完整本地路径
 * @return {String} 返回目录内容，封装成HTML
 * */
const dir = (url, reqPath) => {
  // 遍历读取当前目录下的文件、子目录
  const contentList = walk(reqPath);

  let html = `<ul>`
  for (let [index, item] of contentList.entries()) {
    html += `<li><a href="${url === '/' ? '' : url}/${item}">${item}</a></li>`
  }
  html += `</ul>`

  return html;
}

module.exports = dir;
