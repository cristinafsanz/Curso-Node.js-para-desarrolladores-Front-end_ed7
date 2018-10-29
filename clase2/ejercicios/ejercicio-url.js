const http = require('http');
const url = require('url');

let error = false

// / -> index
// /about
// /contact
// /bug
http.createServer(function(request, response) {
    const { pathname } = url.parse(request.url);

    response.writeHead(200, {
        'Content-Type': 'text/html'
    })

    if (error) {
        response.end('<h1>Ups! </h1>')
    }

    if (pathname === '/') {
        response.end('<h1>index</h1>')
    } else if (pathname === '/contact') {
        response.write('<h1>Contact</h1>')
        response.write('<p>tel: 555-555-555</p>')
        response.end()
    } else if (pathname === '/bug') {
        error = true;
    }
}).listen(8080);