const http = require('http');

http.createServer(function(request, response) {
    process.exit(0);
}).listen(8080);