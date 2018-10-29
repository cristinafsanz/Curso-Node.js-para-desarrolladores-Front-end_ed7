# CLASE 6

https://github.com/Fictizia/Curso-Node.js-para-desarrolladores-Front-end_ed7/tree/master/clase6

Stream es un flujo de datos, van llegando poco a poco, no se tienen todos disponibles.

Propiedad importante de los stream: encadenamiento a través de pipe.

Ejemplo de streams en los ejercicios en read.js y write.js.

node read.js
ABCDEFGHIJKLMNOPQRSTUVWXYZ

node write.js //chunk
<Buffer 41>
<Buffer 42>
<Buffer 43>
<Buffer 44>
<Buffer 45>
<Buffer 46>
<Buffer 47>
<Buffer 48>
<Buffer 49>
<Buffer 4a>
<Buffer 4b>
<Buffer 4c>
<Buffer 4d>
<Buffer 4e>
<Buffer 4f>
<Buffer 50>
<Buffer 51>
<Buffer 52>
<Buffer 53>
<Buffer 54>
<Buffer 55>
<Buffer 56>
<Buffer 57>
<Buffer 58>
<Buffer 59>
<Buffer 5a>
<Buffer 5b>


node write.js // chunk.toString()
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
P
Q
R
S
T
U
V
W
X
Y
Z

- Gulp se basa en streams.

- Creamos gulpfile.js

npm install -g gulp

npm install gulp // para importarlo desde el script, se añade package-lock.json con la versión de todas las dependencias

Task

gulp.task('default', () => {
    console.log('Esta es la tarea por defecto');
})

gulp.task('test', () => {
    console.log('Esta es la tarea de test');
})


Ejecutamos:
$gulp // Entonces se lanza la tarea por defecto

[19:36:03] Using gulpfile ~/Documents/Proyectos/user5/clase6/gulpfile.js
[19:36:03] Starting 'default'...
Esta es la tarea por defecto
[19:36:03] Finished 'default' after 88 μs

Src para leer ficheros: gulp.src('js/sources/*.js') // Acepta string o array

Expresiones como *
Negar ficheros !src/dist/**/*.js
!src/dist/**/*.(js, css) // Varias extensiones


Dest: donde tienen que acabar los ficheros de src // gulp.dest('dist/js')

Ej. gulp.task('default', () => {
    return gulp.src('read.js')
        .pipe(gulp.dest('dist'));
});

Se copia read.js en la carpeta dist

Agrupamiento

gulp.task('build', ['images', 'css', 'js']); // Build se ejecuta después de las 3

gulp.task('default', ['tarea1', 'tarea2'], () => {
    console.log('Default');
});

gulp.task('tarea1', () => {
    console.log('Tarea 1');
});

gulp.task('tarea2', () => {
    console.log('Tarea 2');
});

Watch

gulp.task('default', () => {
    gulp.watch('read.js', ['log'])
});

gulp.task('log', () => {
    console.log('Has cambiado el index,js');
});

[19:47:34] Using gulpfile ~/Documents/Proyectos/user5/clase6/gulpfile.js
[19:47:34] Starting 'default'...
[19:47:35] Finished 'default' after 4.93 ms
[19:47:38] Starting 'log'...
Has cambiado el index,js

Ejecutar otra tarea
En vez de pasar array, se puede pasar callback

gulp.task('default', () => {
    gulp.watch('read.js', () => {
        console.log('Has cambiado el index.js')
        gulp.run('tarea')
    })
});

gulp.task('tarea', () => {
    console.log('Ejecutando tarea');
});


[19:49:52] Using gulpfile ~/Documents/Proyectos/user5/clase6/gulpfile.js
[19:49:52] Starting 'default'...
[19:49:52] Finished 'default' after 4.94 ms
Has cambiado el index.js
gulp.run() has been deprecated. Use task dependencies or gulp.watch task triggering instead.
[19:49:59] Starting 'tarea'...
Ejecutando tarea
[19:49:59] Finished 'tarea' after 48 μs
Has cambiado el index.js
[19:50:03] Starting 'tarea'...
Ejecutando tarea


- Hay muchos paquetes hechos por la comunidad para renombrar.

Ejercicio https://github.com/josex2r/gulp-example-spa/tree/template

Construir una aplicación de React con sass e añadir tareas 


Nota porque no tenemos git en las máquinas
xcode-select --install

Tareas:
Código que habrá que pasar por babel
Optimizar imagen para que ocupe menos
Transformar scss a css
En carpeta dist con la aplicación construida

Abrimos gulpfile.js, por ahora todas @TODO

Dist:
gulp.task('public', () => {
  return gulp.src('public/*') //return para que devuelva el string
    .pipe(gulp.dest('dist'));
});

gulp public 
[20:03:09] Using gulpfile ~/Documents/Proyectos/user5/clase6/gulp-example-spa-template/gulpfile.js
[20:03:09] Starting 'public'...
[20:03:09] Finished 'public' after 19 ms


Lint

const eslint = require('grunt-eslint');

gulp.task('lint', () => {
  return gulp.src([
    'src/**/*.js', 
    'gulpfile.js'
  ]).pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

Images de src/images y pasarlas por gulp-imagemin y volcarlo en dist/images
Para optimizar imágenes

const imagemin = require('gulp-imagemin');

gulp.task('images', () => {
  return gulp.src('src/images/*')
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true // Puedes hacer la imagen progresiva con ello
    }))
    .pipe(gulp.dest('dist/images'));
});

});

* Ej. imagen progresiva en Google photos

- Proceso gulp-cache para comprobar si no se ha modificado el fichero
Para ficheros js, para imágenes...

gulp.task('images', () => {
  const processImage = imagemin({
    optimizationLevel: 3,
    progressive: true
  });

  return gulp.src('src/images/*')
    .pipe(cache(processImage))
    .pipe(gulp.dest('dist/images'));
});


ZiMacPro-7:gulp-example-spa-template nodejs$ gulp images
[20:24:49] Using gulpfile ~/Documents/Proyectos/user5/clase6/gulp-example-spa-template/gulpfile.js
[20:24:49] Starting 'images'...
[20:24:50] gulp-imagemin: Minified 1 image (saved 63 B - 2.4%)
[20:24:50] Finished 'images' after 236 ms
ZiMacPro-7:gulp-example-spa-template nodejs$ gulp images
[20:25:07] Using gulpfile ~/Documents/Proyectos/user5/clase6/gulp-example-spa-template/gulpfile.js
[20:25:07] Starting 'images'...
[20:25:07] gulp-imagemin: Minified 0 images
[20:25:07] Finished 'images' after 21 ms


Clean
Borrar directorio dist

gulp.task('clean', () => {
  return gulp.src('dist', { read: false }) // no hace falta leer, se va a borrar
    .pipe(clean());
});

Vendor

Coger el fichero `node_modules/requirejs/require.js`, en memoria renombrarlo a vendor y dejarlo en `dist/scripts`

const rename = require("gulp-rename");

gulp.task('vendor', () => {
  return gulp.src('node_modules/requirejs/require.js')
    .pipe(rename({
      basename: 'vendor' // para solo cambiar el nombre
    }))
    .pipe(gulp.dest('dist/scripts'));
});

Babel

Se utiliza JS moderno y JSX para incustrar html en JS

Tarea scripts

Browserify: trabaja con stream de node, string con buffer. Resuelve los imports, va a node_modules e inclusta los módulos
Entries: fichero entrada
Extensions: qué extensiones tener en cuenta, que muestre errores

gulp.task('scripts', ['lint'], () => {
  browserify({
    entries: 'src/index.js',
    extensions: ['.js'],
    debug: true,
    path: ['src', 'node_modules'] //puede buscar el resto de ficheros ahí
  });
});

Dar soporte a versiones con babelify

.transform(babelify, {
    presets: ['env', 'react'] // pasa babel a todos los ficheros
  })

.bundle: // que ejecute la orden, que se junte en uno solo (junto con el source)

Hay que transformar de stream de node a stream de gulp: viny-source-stream

Ya está como stream de gulp después de .pipe(buffer())

** En gulp/docs/recipes de GitHub dice como realizar browserify por ejemplo

En babel podrías decir qué versiones tiene que soportar

Styles

Ficheros de sass para transformar a css

gulp.task('styles', () => {
  return gulp.src('src/styles/*.scss')
    .pipe(sass()) // lo transforma a css
    .pipe(rename({
      basename: 'app' // para que el fichero sea app.css
    }))
    .pipe(gulp.dest(dist/styles));
});

- Lanzando gulp ya se lanza todo en paralelo, las tareas son asíncronas

gulp.task('default', [
  'clean', 
  'images', 
  'styles',
  'scripts',
  'vendor',
  'public'
]);

- Otra librería para hacerlo en serie: const runTask = require('run-sequence');

En serie por parámetro y en paralelo en array

gulp.task('default', function() {
  runTask(
    'clean', // primero ésta
    ['images', 'public', 'styles'],
    'vendor',
    'script'
  )
});

Con el callback lo último que hacemos es que hemos terminado



gulp.task('default', function(callback) {
  runTask(
    'clean',
    ['images', 'public', 'styles'],
    'vendor',
    'scripts',
    callback
  )
});


http-server en dist y ya vemos en http://localhost:8080/
Emoji search
- Cada vez que se toque un script, que se ejecute tareas de js, imágenes lo mismo

gulp.task('server', () => {
  // @TODO
});

Usaremos gulp.watch, 1 por cada extensión

gulp.task('server', () => {
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/**/*.js', ['scripts']);
  gulp.watch('public/**/*.js', ['public']);
  gulp.watch('src/images/*', ['images']);
});


Servidor en carpeta dist con gulp-connect

gulp.task('run-server', function() {
  return connect.server({
    root: 'dist' // donde
  });
});

gulp.task('server', ['default'], () => {
  gulp.run('run-server');
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/**/*.js', ['scripts']);
  gulp.watch('public/**/*.js', ['public']);
  gulp.watch('src/images/*', ['images']);
});


- Abrir pestaña Chrome desde Node: open

Que se recargue cuando finalicen las tareas

gulp.task('run-server', function() {
  return connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.watch('src/**/*.scss', function() {
    connect.reload(); // mejor después de ejecutar styles
    gulp.run('styles');
  });


También se podría minificar todo

Si producción, se podrían seguir haciendo cosas…



