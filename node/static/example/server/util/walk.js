const fs = require('fs');
const mimes = require('./mimes');

/**
 * 遍历读取目录内容（子目录，文件名）
 * @param {String} reqPath 请求资源的绝对路径
 * @return {Array} 目录内容列表
 * */
const walk = reqPath => {
  const files = fs.readdirSync(reqPath)
  const dirList = []
  const fileList = []
  files.forEach(file => {
    const fileArr = file.split('\.')
    const fileMime = fileArr.length > 1 ? fileArr[fileArr.length - 1] : 'undefined'

    if (typeof mimes[fileMime] === 'undefined') {
      dirList.push(file)
    } else {
      fileList.push(file)
    }
  })

  return [...dirList, ...fileList]
}

module.exports = walk
