var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cookieSession = require('cookie-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filmRouter = require('./routes/film');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieSession({
  name: 'session',
  keys: ['my-secret-key'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/film', filmRouter);

// const middleware = app.use(function(req, res, next) {
//   // res.redirect('/')
//   next();
// })

// app.param('id', (req, res, next, id) => {
//   res.id = id;
//   next();
// })

// app.get('/test/:id', (req, res) => {
//   res.render('index', {title: res.id})
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
