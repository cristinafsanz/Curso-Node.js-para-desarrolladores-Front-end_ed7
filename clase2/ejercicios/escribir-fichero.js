const fs = require('fs');

fs.readFile('leer-fichero.js', 'utf-8', (error, content) => {
    if (error) {
        console.error('Algo ha ocurrido');
    } else {
        fs.writeFile('copy-leer-fichero.js', content, (error) => {
            if (error) {
                console.error('No se ha podido copiar')
            } else {
                console.log('El fichero se ha copiado')
            }
        })
    }
})