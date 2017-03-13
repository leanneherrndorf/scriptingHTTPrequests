var https = require('https');

function getAndPrintHTML (options, callback) {

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


}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };



getAndPrintHTML(requestOptions, printHTML);