const url = require('url');
const demoURL = 'http://localhost:3000/ruta?parametro=dato#detalle';

console.log('El host: ' + url.parse(demoURL).hostname);
console.log('El puerto: ' + url.parse(demoURL).port);
console.log('La ruta: ' + url.parse(demoURL).pathname);
console.log('El parametro: ');
console.log(url.parse(demoURL, true).query);
console.log('El hash(#): ' + url.parse(demoURL).hash);