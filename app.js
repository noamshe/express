var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var routes = require('./routes/index');
var users = require('./routes/users');
var usersControllers = require('./controllers/users.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var connection = require('./utils/mysqlconnector.js')
// Make our db accessible to our router
app.use(function(req,res,next){
  req.db = connection;
  next();
});

require('./conf/routes.js')(app);

//app.use('/', routes);
//app.use('/', usersControllers);
//app.get('/newuser2', usersControllers.myfunc);
//app.get('/newuser2',
//  function(req, res) {
//    res.render('newuser', { title: 'Add New User' });
//  }
//  );


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// this initialize sequelize check it out
//var db = require('./models')
//db.sequelize.sync({ force: true });

module.exports = app;
