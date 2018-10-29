# CLASE 5

https://github.com/Fictizia/Curso-Node.js-para-desarrolladores-Front-end_ed7/tree/master/clase5

Servicios que nos ofrece Google para tener base de datos, autenticación, subir ficheros...sin backend.

https://firebase.google.com/products/

Alojamiento para Front y tiras de sus servicios para el backend.

Base de datos en tiempo real: un json enorme en la nube.

Entrar con cuenta de Google: https://console.firebase.google.com/?pli=1

- Creamos nuevo proyecto

Autenticación - Web setup: para copiar la configuración cliente

- Copiamos en test.html la configuración para tener la librería importada

https://console.firebase.google.com/project/curso-nodejs-ae2c7/authentication/providers

Habilitar google y los que queramos (con correo)

Añadimos proveedor: const provider = new firebase.auth().GoogleAuthProvider();

Arrancar servidor donde está el fichero (npm i -g http-server)

Http-server // En http://127.0.0.1:8080/test.html

Habilitar que se puedan ver popups en la barra

Cloud Storage: Para guardar ficheros (5GB gratuitos)

Se suben a la referencia, por defecto sería la raíz del disco duro.

Con child irías más dentro

firebase.storage().child('images/mountains.jpg') // referencia raíz 
o 
firebase.storage(‘images’).child('mountains.jpg') // referencia images



Base de datos en tiempo real

Si un nodo se modifica a todos se les actualiza automáticamente.

Codelabs para montar un chat (tutoriales de Google)

Crear modo test y ya sale write/read a true

Realtime Database y comprobar pestaña “Rules”

En las reglas se pueden añadir validaciones (si es el mismo string, que no se guarde)

const testRef = firebase.database().ref('test') // Apunta a nodo test

http://127.0.0.1:8080/database.html

Y ya se ve el nodo con los 2 datos

http://127.0.0.1:8080/database-recover.html

Y salen los 2 datos

Si se pone on y se cambian datos en firebase, salen los cambios

{name: "Cristest", timestamp: 1537899258559}
{name: "Cris", timestamp: 1537899258559}

Array: cada elemento del array es un objeto

Para pintar los elementos que se van añadiendo: child_added

ref.orderByChild('location/latitude'); // location.latitude para json

Firebase-admin

Una librería para administrar desde el servidor

Ejercicio

git clone https://github.com/josex2r/twitter-firebase-stream.git

cd twitter-firebase-stream

git checkout template

npm install

Una aplicación express

En package.json: Variable de entorno para tener nuestros token

"dotenv": "^6.0.0",

En .env definimos todo (nos ha pasado la parte de tokens de twitter y la de Firebase en los ficheros)

Al arrancar se ejecutaría

Variables disponibles en www:

require('dotenv').config();

En lib se usará en twitter-client.js  y firebase-client.js

- Hacer el login en index.js (viene en index.pug)

- layout.pug añadir librería

- Logarse con Google

Maps.js: MAPS_API: process.env.MAPS_API, 

También en maps.pug

Configuración para iniciar en index.js y map.js

maps.js:

initTweets() se invoca cuando el mapa carga

Twitter-stream: para escuchar hashtag

Crear conexión datos con twitter

Funciona por socket

Se llama desde ruta map

Logout: En maps.js


Función showHashtag(hashtag)
- Escuchar cada vez que se inserte un tweet aparezca

- Pintar marcador

addMarker

- Caja texto con socket en el servidor

Meter socket.io y hacer coo el otro día

En lib: socket.js

Escuchar los nuestros en vez de los de twitter

Module.exports

- Que escuche otro hashtag

** Mirar por qué da “index.js:83 GET http://localhost:3000/socket.io/?EIO=3&transport=polling&t=MOIKYUh net::ERR_CONNECTION_REFUSED” al cambiar de hashtag
