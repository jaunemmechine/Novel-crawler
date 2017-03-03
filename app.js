var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//引入模块
//自动运行全自动偷小说功能
/*var novelAuto=require('./lib/novelAuto');
novelAuto.getAllNovel();*/

var index = require('./routes/index');
/*var install = require('./routes/install');*/
var install = require('./routes/install');
var admins = require('./routes/admins');
var test=require('./routes/test');
var viewnovel=require('./routes/viewnovel');
var viewsection=require('./routes/viewsection');
var appindex=require('./routes/appindex');
//var users = require('./routes/users');
//var hlh=require('./routes/hlh');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//设置路由中间件
app.use('/', index);
/*app.use('/install', install);*/
app.use('/install', install);
app.use('/ajax/admins', admins);
app.use('/test', test);
app.use('/viewnovel', viewnovel);
app.use('/viewsection', viewsection);
app.use('/app/', appindex);
//app.use('/users', users);
//新增路由规则
//app.use(/^\/[0-9]+$/, hlh);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
