const fs = require('fs')

/**
 * 读取文件方法
 * @param {String} filePath 文件本地的绝对路径
 * @return {String}
 * */
const file = (filePath) => {
  return fs.readFileSync(filePath, 'binary')
}

module.exports = file
