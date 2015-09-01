var http = require('http');
var fs = require('fs');

var html = fs.readFileSync('./index.html');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(html);
  response.end();
}).listen(5000);
