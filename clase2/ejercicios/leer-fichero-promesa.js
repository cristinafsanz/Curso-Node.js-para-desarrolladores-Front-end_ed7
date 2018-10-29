const fs = require('fs');

function readFile(name) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, 'utf-8', (error, content) => {
            if (error) {
                reject('No se ha podido copiar')
            } else {
                resolve(content)
            }
        })
    })
}

function writeFile(name, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(name, content, (error) => {
            if (error) {
                reject('No se ha podido copiar')
            } else {
                resolve('El fichero se ha copiado')
            }
        })
    })
}

readFile('leer-fichero-promesa.js').then((content) => {
    return writeFile('copy-leer-fichero-promesa.js', content)
}).then(() => {
    console.log('OK')
}).catch(() => {
    console.log('KO')
})

// Con async await si pones try y catch
// (async function() {
//    const content = await readFile('leer-fichero-promesa.js')
//    await writeFile('copy-leer-fichero-promesa.js', contet);
// })