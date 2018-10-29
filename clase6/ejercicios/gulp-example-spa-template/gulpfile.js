// Load plugins
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sass = require('gulp-sass');
const runTask = require('run-sequence');
const connect = require('gulp-connect');
const open = require('open');

gulp.task('run-server', function() {
  return connect.server({
    root: 'dist',
    livereload: true
  });
});

// Lint javascript
gulp.task('lint', () => {
  return gulp.src([
    'src/**/*.js', 
    'gulpfile.js'
  ]).pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

// Public assets
gulp.task('public', () => {
  return gulp.src('public/*')
    .pipe(gulp.dest('dist'));
});

// Styles
gulp.task('styles', () => {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(rename({
      basename: 'app'
    }))
    .pipe(gulp.dest('dist/styles'));
});

// Vendor
gulp.task('vendor', () => {
  return gulp.src('node_modules/requirejs/require.js')
    .pipe(rename({
      basename: 'vendor'
    }))
    .pipe(gulp.dest('dist/scripts'));
});

// Scripts
gulp.task('scripts', ['lint'], () => {
  browserify({
    entries: 'src/index.js',
    extensions: ['.js'],
    debug: true,
    path: ['src', 'node_modules']
  })
  .transform(babelify, {
    presets: ['env', 'react']
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(gulp.dest('dist/scripts'));
});

// Images
gulp.task('images', () => {
  const processImage = imagemin({
    optimizationLevel: 3,
    progressive: true
  });

  return gulp.src('src/images/*')
    .pipe(cache(processImage))
    .pipe(gulp.dest('dist/images'));
});

// Clean
gulp.task('clean', () => {
  return gulp.src('dist', { read: false })
    .pipe(clean());
});

// Build App
gulp.task('build', ['clean'], (callback) => {
  // @TODO
});

// Default task
gulp.task('default', function(callback) {
  runTask(
    'clean',
    ['images', 'public', 'styles'],
    'vendor',
    'scripts',
    callback
  )
});

// Watch
gulp.task('server', ['default'], () => {
  gulp.run('run-server');

  open('http://localhost:8080');

  gulp.watch('src/**/*.scss', function() {
    connect.reload();
    gulp.run('styles');
  });
  gulp.watch('src/**/*.js', function() {
    connect.reload();
    gulp.run('scripts');
  });
  gulp.watch('public/**/*', function() {
    connect.reload();
    gulp.run('public');
  });
  gulp.watch('src/images/**/*', function() {
    connect.reload();
    gulp.run('images');
  });
});
