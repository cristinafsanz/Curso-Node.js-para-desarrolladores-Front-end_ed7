# CLASE 2

https://github.com/Fictizia/Curso-Node.js-para-desarrolladores-Front-end_ed7/blob/master/clase2/README.md

Podemos usar iTerm y VS Code en local

En carpeta clase 2 estarán todos los ejercicios que vaya haciendo

Ejercicio 1:
Creamos en la carpeta que queramos:
cd Documents/Proyectos/clase2/
hello.js:
console.log(“Hello world”);

Y ejecutamos:
node hello.js

Documentación Node: https://nodejs.org/dist/latest-v8.x/docs/api/

Ejercicio 2:
    • Importar librería http
    • Crear servidor
    • Cada vez que se acceda a 8080 se ejecutará 
response.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    response.end('Hello World!');


Si accedemos a http://localhost:8080/ vemos “Hello World!” en la página web.

(Ejemplos en la documentación)

Todos los ejercicios en la carpeta “clase2”

Promesas solo tienen 1 parámetro

Nota: Disable cache + Command R para quitar cache


Process.argv
Ej.
node processargv.js --help
[ '/Users/nodejs/.nvm/versions/node/v8.12.0/bin/node',
  '/Users/nodejs/Documents/Proyectos/clase2/processargv.js',
  '--help' ]

Librería fs-extra

Con shebang no hace falta poner node ejecutable.js

ejecutable.js
#!/usr/bin/env node
console.log('Soy un script!');

chmod +x ejecutable.js

./ejecutable.js

Variables de entorno
export test = testjs
./variables-entorno.js saldrían todas + este último

Modularización:
Si require, se busca module.exports de ese fichero

NPM:
npm init
entry point: fichero principal de la aplicación (Ej. modularizacion2.js)
….
Se crea el package.json
"main": "modularizacion2.js",

Creas el alias "start": "node modularizacion2.js"

Y lo lanzas: npm run start


Instalar librería (buscar en https://www.npmjs.com/)
npm install cowsay
    • Se genera la carpeta node_modules con todas las librerías que utiliza

Si ejecutamos: npm install --save cowsay
Aparece en package.json para que se pueda compartir

Otra persona haría: npm install y se descargaría todas las dependencias

npm install --save-dev cowsay 
Se mete en devDevpendencies: por ejemplo en las librerías como tests que no quieres que estén en producción.

npm install -g cowsay //lo añade al path del sistema y lo puedes ejecutar fuera del proyecto. 

NVM (ya instalado en local en los ordenadores de Fictizia)
npm list
nvm use 10
nvm install 10.

Con varios proyectos y cada uno su versión de Node puedes cambiar de una versión a otra

En package.json puedes poner
“Node”: “>=4 && <=6” y así en integración continua sabría qué versión es

.nvmrc: Si tiene una versión ya hacer nvm use y ya está

Hay ejercicios del tema 2 por si los queremos hacer





