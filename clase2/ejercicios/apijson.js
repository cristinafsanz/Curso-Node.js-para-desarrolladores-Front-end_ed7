const http = require('http');

function getJSON(host) {
    return new Promise((resolve, reject) => {
        http.get(host, (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            }).on('end', () => {
                const json = JSON.parse(data);

                resolve(json);
            })
        }).on('error', function() {
            console.log('Error')
        }) 
    });
}

getJSON('http://ghibliapi.herokuapp.com/films/').then((json) => {
    json.forEach((film) => console.log(film.title));
})