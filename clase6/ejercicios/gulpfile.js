const gulp = require('gulp');

gulp.task('default', () => {
    gulp.watch('read.js', () => {
        console.log('Has cambiado el index.js')
        gulp.run('tarea')
    })
});

gulp.task('tarea', () => {
    console.log('Ejecutando tarea');
});
