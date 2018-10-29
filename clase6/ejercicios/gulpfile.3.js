const gulp = require('gulp');

gulp.task('default', ['tarea1', 'tarea2'], () => {
    console.log('Default');
});

gulp.task('tarea1', () => {
    console.log('Tarea 1');
});

gulp.task('tarea2', () => {
    console.log('Tarea 2');
});
