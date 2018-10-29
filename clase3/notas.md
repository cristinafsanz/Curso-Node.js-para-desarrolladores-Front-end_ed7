# CLASE 3

https://github.com/Fictizia/Curso-Node.js-para-desarrolladores-Front-end_ed7/tree/master/clase3

Express: Para crear servidores web (para hacer lo de la clase anterior más rápido)

Versión específica: npm install -g express@3.x

- Instalamos globalmente el generador:

npm install express-generator -g

-  En /Users/nodejs/Documents/Proyectos/user5/clase3 se crea el proyecto:
express film-api
cd film-api

Da una estructura para trabajar que se puede cambiar
bin/www: arranca la aplicación

- Instalar paquetes:
npm install

- Arrancar con: 
npm start //Hace node ./bin/www

- Por defecto en: http://localhost:3000/

- Mirar app.js

- Se puede usar plantillas como pug, handlebars…

- Middleware: el primero es el que tiene más prioridad

http://localhost:3000/test

En app.js:

app.get('/test', (req, res) => {
  res.render('index', {title: 'He llegado a mi ruta'})
})

Si se pone antes redirect tendrá prioridad:

app.use(function(req, res, next) {
  res.redirect('/')
})

app.get('/test', (req, res) => {
  res.render('index', {title: 'He llegado a mi ruta'})
})

Si quitamos el redirect ya sí sale:

app.use(function(req, res, next) {
  // res.redirect('/')
  next()
})

app.get('/test', (req, res) => { //sería la última y ya no hace falta next
  res.render('index', {title: 'He llegado a mi ruta'})
})

Se puede acceder a la parte estática en public:

http://localhost:3000/stylesheets/style.css

Con parámetros:

app.param('id', (req, res, next, id) => {
  res.id = id;
  next();
})

app.get('/test/:id', (req, res) => {
  res.render('index', {title: res.id})
})

Ej. http://localhost:3000/test/prueba

Saldría

prueba
Welcome to prueba

Rutas en distintos sitios con:
app.use('/', indexRouter); /films
app.use('/users', indexRouter); // /users/films


- Vamos a hacer una aplicación de películas (solución en https://github.com/josex2r/film-api)

    • En desarrollo: npm install --save-dev nodemon
Así se recargará con cambios

En package.json cambiamos start

El último parámetro lo que se ejecuta:
"start": "nodemon --watch bin --watch public --watch routes --watch views --watch app.js ./bin/www"

npm start //vemos en la consola que va haciendo restarting con los cambios

- Copiamos los 4 ficheros de la solución de bootstrap y css y guardar como el raw (ej. https://raw.githubusercontent.com/josex2r/film-api/master/public/stylesheets/style.css)

Cambiamos index.jade y montamos un formulario //indentar es importante

Y en localhost:3000 vemos el formulario

Creamos plantilla para la página de películas
Y también la ruta para luego usar use en el app.js

En http://localhost:3000/film vemos el título Película

- Página de login

Lo vamos a meter en routes/index.js, se podría meter en otro lado

router.post('/login', function(req, res, next) {
  
});

- Parámetro en la plantilla para avisar al usuario si está mal
	res.redirect('/?error=true');
- Se recupera en el get(‘/’)
- Y se pinta en index.jade: p #{message}

Si ponemos mal mail y damos a enviar: http://localhost:3000/?error=true

Y pinta el mensaje

- Crear sesión para el usuario para que pueda acceder a http://localhost:3000/film

- Instalar cookie-sesion: npm install --save cookie-session

Y arrancar de nuevo

En app.js importar el paquete
var cookieSession = require('cookie-session');

Y el app.use(cookieSession

En login creamos la sesión (index.js): req.session.user = { email };

Hasta que expire o la borre (req.session = null), por ejemplo en el logout

En la consola - Application - Cookies: sale la cookie

Creamos logout en el routes/index.js y si vamos a /logout se borra el valor de la cookie

Si haces login vuelve a ponerse el valor

- Rutas que necesiten autenticación
Carpeta middlewares (meterlo en nodemon en package.json): auth.js

En film.js importamos ese auth

const auth = require('../middlewares/auth');

router.use(auth);

Ahora si hacemos logout y cuando hacemos http://localhost:3000/film no te deja ver las películas.

- Se copia carpeta db y las vistas que vienen en la solución (views, views/films y mixins)

Require se cachea, al hacer new DB() solo sería la primera vez y luego se utiliza el mismo

Crear en middlewares: db.js

En routes/film se engancha
router.use(db);

Y añadir const films = req.db.get('films')

res.render('film', { films });

Reiniciar servidor

Botón “Ver más”

En router/film.js

Crear en routes: params/film_id.js

http://localhost:3000/film/add




*** Copiar todo el contenido de film-api menos node-modules (carpeta drive https://drive.google.com/drive/folders/1tkDM3P6a_JWsOJGQHR1HDsjAhxEsv-Tv?ogsrc=32)