const fs = require('fs');

const content = fs.readFileSync('leer-fichero.js', 'utf-8');

console.log(content)