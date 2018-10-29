const http = require('http');

function ping(host) {
    http.get(host, function(response) {
        console.log('OK!', response.statusCode);
    }).on('error', function() {
        console.log('KO!')
    }) 
}

ping('http://google.es')