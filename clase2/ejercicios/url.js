const http = require('http');
const url = require('url');

// / -> index
// /about
// /contact
http.createServer(function(request, response) {
    const { pathname } = url.parse(request.url); // ambos son lo mismo, parsed1 y parsed2
    // const parsed2 = new URL(request.url);

    response.writeHead(200, {
        'Content-Type': 'text/html'
    })

    if (pathname === '/') {
        response.end('<h1>index</h1>')
    } else if (pathname === '/contact') {
        response.write('<h1>Contact</h1>')
        response.write('<p>tel: 555-555-555</p>')
        response.end()
    }
}).listen(8080);