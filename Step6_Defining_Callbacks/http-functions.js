var https = require('https');

module.exports = function getHTML (options, callback) {
        var output = '';

    https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      output += data;
    });
    response.on('end', function() {
      callback(output);
    });
  });
};