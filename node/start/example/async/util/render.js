const fs = require('fs');

const render = (page) => {
  return new Promise((resolve, reject) => {
    const filePath = `./view/${page}`;
    fs.readFile(filePath, 'binary', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

module.exports = render;
