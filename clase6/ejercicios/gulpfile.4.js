const gulp = require('gulp');

gulp.task('default', () => {
    gulp.watch('read.js', ['log'])
});

gulp.task('log', () => {
    console.log('Has cambiado el index,js');
});
