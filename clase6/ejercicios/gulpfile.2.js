const gulp = require('gulp');

gulp.task('default', () => {
    return gulp.src('read.js')
        .pipe(gulp.dest('dist'));
});

