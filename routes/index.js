var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express1' });
});
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'hello world' });
});
router.get('/showusers', function(req, res) {
//  var express = require('express');
  res.render('helloworld', { title: 'show users' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  db.query('SELECT * FROM users', function(err, rows){
    res.render('userlist', {
      "users" : rows
    });
  });
});

module.exports = router;
