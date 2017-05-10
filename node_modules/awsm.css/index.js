var fs = require('fs');
var path = require('path');
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-awsm-css', function () {
  return function(css) {
    return new Promise(function(resolve) {
      var filepath = path.join(__dirname, 'dist', 'awsm.min.css');
      var filecontent = fs.readFileSync(filepath, 'utf8');

      css.prepend(filecontent);

      resolve();
    })
  };
});
