const fs = require('fs');

fs.readFile('leer-fichero.js', 'utf-8', (error, content) => {
    if (error) {
        console.error('Algo ha ocurrido');
    } else {
        console.log(content)
    }
})