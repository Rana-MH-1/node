const fs = require('fs');
const path = require('path');

module.exports = function (dir, filterStr, callback) {

    fs.readdir(dir, function (err, files) {
      if (err)
        return callback(err)
  
      filteredFiles =files.filter(function (file) {
        return path.extname(file) === '.' + filterStr
      })
  
      callback(null, filteredFiles)
    })
  }