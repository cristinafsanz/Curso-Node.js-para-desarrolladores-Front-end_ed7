# CLASE 4

https://github.com/Fictizia/Curso-Node.js-para-desarrolladores-Front-end_ed7/tree/master/clase4

Websockets: Otra forma de comunicar front y back.

Clonar repo y cambiar a rama template:

git clone https://github.com/josex2r/simple-chat.git
cd simple-chat
git checkout template
npm install
npm run start

http://localhost:3000/

- Creación del servidor en bin/www
var server = http.createServer(app);

- Creamos librería que reciba servidor para crear el socket
- En la raíz crear socket.js (está ya en el nodemon)

npm -i save socket.io

En www:
var createSocket = require('../socket');

var server = http.createServer(app);
createSocket(server);

- Ya escucharía peticiones el servidor al hacer
const io = SocketIo(server);

En chat.pug:
script(type='text/javascript', src='/socket.io/socket.io.js')

En chat.js:
const socket = io();

En http://localhost:3000/chat ya se puede ver en WS en Frames se puede ver la conexión.

El servidor manda mensaje de “Ya estás conectado”:

chat.js
socket.on('connect', () => {
    addAlert(chatContent, 'Ya estás conectado!');
  })

En el back socket.js

io.on('connection', (socket) => {
        console.log('Se ha conectado alguien')
    })

Sale en el mensaje

Servidor emite:

io.on('connection', (socket) => {
        socket.emit('info', 'Ya estás conectado');
    })


Se recibe:
socket.on('info', (message) => {
    addAlert(chatContent, message, 'info');
  })

Vamos a compartir cookieSession en un fichero común

Para hacer como si fueras otro usuario, con ventana incógnito o con safari

- Enviar un mensaje a todos: chat.js

button.addEventListener('click'

socket.emit('message-sent', {});

Varios parámetros como objeto

En el servidor emitir a todos menos a mí y luego a mí el mensaje de que se ha enviado.

- Desconexión

- Crear salas: info de salas disponibles desde el back

Entraría en canal general: socket.join(rooms[0]);

- Que solo lleguen mensajes a los que estén en la sala


HEROKU

Subir el código a la plataforma y ejecutar el comando
Asigna máquina virtual y ejecuta el código
Gratuito pero ilimitado
Si nadie se meta entra en modo suspensión

Nos damos de alta

Dynos = las máquinas (1 gratuita)

Se puede recuperar una variable con procces.env y meterse dentro de Heroku

Buildpack: con el package.json sabe que es un node y tiene una serie de pasos que lo hace solo (node, npm install…)

Se puede gestionar a través de consola o con la interfaz

npm install -g heroku

heroku login

Logged in as cristinafsanz@gmail.com

- Añadir aplicación: heroku create simple-chat-fictizia

Creating ⬢ simple-chat-fictizia... done
https://simple-chat-fictizia.herokuapp.com/ | https://git.heroku.com/simple-chat-fictizia.git

git remote -v
heroku	https://git.heroku.com/simple-chat-fictizia.git (fetch)
heroku	https://git.heroku.com/simple-chat-fictizia.git (push)

git add .
git commit -m “lo que sea”
git push heroku +template:master // mi rama template a rama master de Heroku

En https://dashboard.heroku.com/apps se ve la nueva app

heroku logs -t

Y metiéndonos en https://simple-chat-fictizia.herokuapp.com
Se ve que funciona
También desde el dashboard con el Open App

Crear comando para producción (dejamos server para desarrollo con el nodemon y el start solo arrancar)

Y el engines

Netlify
Con certificado ssl, despliegue continuo
