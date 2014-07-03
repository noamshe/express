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
router.get('/test', function(req, res) {
//  var express = require('express');
  res.render('test', { title: 'show users' });
});

module.exports = router;
